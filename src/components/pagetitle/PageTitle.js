import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
  return (
    <div className="page-title-wrap">
      <div className="container">
        <div className="page-title-inner">
          <span className="page-title-tag">{props.pageTitle}</span>
          <h1 className="page-title-heading">{props.pagesub}</h1>
          <nav className="page-title-breadcrumb">
            <Link to="/">Home</Link>
            <span className="page-title-sep">/</span>
            <span>{props.pagesub}</span>
          </nav>
        </div>
      </div>

      <style>{`
        .page-title-wrap {
          background-color: var(--color-dark);
          padding: 180px 0 64px;
        }

        .page-title-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .page-title-tag {
          display: inline-block;
          font-family: var(--font-primary);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-white);
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.45);
          padding: 6px 16px;
          border-radius: 40px;
        }

        .page-title-heading {
          font-family: var(--font-primary);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: var(--color-white);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .page-title-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-secondary);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        .page-title-breadcrumb a {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.2s;
        }

        .page-title-breadcrumb a:hover {
          color: var(--color-white);
        }

        .page-title-sep {
          color: rgba(255, 255, 255, 0.25);
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .page-title-wrap { padding: 160px 0 64px; }
          .page-title-heading { font-size: 28px; }
        }

        
      `}</style>
    </div>
  );
};

export default PageTitle;