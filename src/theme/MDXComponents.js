import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

function Callout({ kind, title, children }) {
  return (
    <aside className={clsx('agentic-callout', `agentic-callout--${kind}`)}>
      {title && <strong className="agentic-callout__title">{title}</strong>}
      <div>{children}</div>
    </aside>
  );
}

function CardGroup({ cols = 2, children }) {
  return (
    <div className="agentic-card-grid" style={{ '--card-columns': cols }}>
      {children}
    </div>
  );
}

function Card({ title, icon, href, children }) {
  return (
    <Link className="agentic-card" to={href || '#'}>
      {icon && <span className="agentic-card__icon" aria-hidden="true">{icon}</span>}
      <strong>{title}</strong>
      <span className="agentic-card__body">{children}</span>
    </Link>
  );
}

export default {
  ...MDXComponents,
  Note: (props) => <Callout kind="note" {...props} />,
  Info: (props) => <Callout kind="info" {...props} />,
  CardGroup,
  Card,
};
