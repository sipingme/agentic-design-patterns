#!/usr/bin/env bash
set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "Run this script as root." >&2
  exit 1
fi

deploy_public_key=${1:?Pass the CI deploy public key as the first argument.}
deploy_user=agentic-deploy
deploy_root=/var/www/agentic-design-patterns
nginx_group=nginx

if ! getent group "$nginx_group" >/dev/null; then
  echo "Expected Nginx group '$nginx_group' was not found." >&2
  exit 1
fi

if ! id "$deploy_user" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$deploy_user"
fi
passwd --lock "$deploy_user" >/dev/null

install -d -o "$deploy_user" -g "$deploy_user" -m 700 "/home/$deploy_user/.ssh"
authorized_keys="/home/$deploy_user/.ssh/authorized_keys"
touch "$authorized_keys"
grep -qxF "$deploy_public_key" "$authorized_keys" || printf '%s\n' "$deploy_public_key" >> "$authorized_keys"
chown "$deploy_user:$deploy_user" "$authorized_keys"
chmod 600 "$authorized_keys"

install -d -o "$deploy_user" -g "$nginx_group" -m 2775 "$deploy_root/releases"
install -o root -g root -m 644 "$(dirname "$0")/nginx.conf" /etc/nginx/conf.d/docs.siping.me.conf

if ! command -v rsync >/dev/null; then
  if command -v dnf >/dev/null; then
    dnf install -y rsync
  elif command -v apt-get >/dev/null; then
    apt-get update
    apt-get install -y rsync
  else
    echo "Install rsync on the server, then rerun this script." >&2
    exit 1
  fi
fi

nginx -t
systemctl reload nginx

if command -v certbot >/dev/null && getent hosts docs.siping.me >/dev/null; then
  certbot --nginx --non-interactive --agree-tos --register-unsafely-without-email --redirect -d docs.siping.me
else
  echo "Nginx is configured for HTTP. Add DNS for docs.siping.me and run Certbot to enable HTTPS."
fi

echo "Server provisioned for $deploy_user; deploy the first release to create the current site symlink."
