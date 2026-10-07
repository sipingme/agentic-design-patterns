# Agentic 智能体设计模式

基于 Docusaurus 的静态文档站，正文使用 MDX，导航在 `sidebars.js` 中维护。

## 本地预览

```bash
npm ci
npm start
```

## 构建

```bash
npm run build
```

构建产物位于 `build/`。

## 部署

线上地址：<https://docs.siping.me>。也可通过 `http://docs.siping.me:3001` 访问直连端口。

向 `main` 推送提交会触发 `.github/workflows/deploy.yml`，先构建静态站，再通过专用 SSH 部署账号同步到 VPS 的 Nginx 站点目录。仓库使用 `DEPLOY_SSH_KEY` Actions secret；不要将 root 密码用于 CI。

服务器首次配置脚本位于 `deploy/provision-server.sh`，只需在重建环境时由管理员运行。
