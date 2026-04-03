import React from "react";
import { Link } from "react-router-dom";

const PageTitle = (props) => {
  const MAX_TITLE_LENGTH = 80;
  const MAX_BREADCRUMB_LENGTH = 60;

  const truncatedTitle =
    props.pagesub?.length > MAX_TITLE_LENGTH
      ? props.pagesub.slice(0, MAX_TITLE_LENGTH) + "..."
      : props.pagesub;

  const truncatedBreadcrumb =
    props.pagesub?.length > MAX_BREADCRUMB_LENGTH
      ? props.pagesub.slice(0, MAX_BREADCRUMB_LENGTH) + "..."
      : props.pagesub;

  return (
    <div className="page-title-wrap">
      <div className="container">
        <div className="page-title-inner">
          <span className="page-title-tag">{props.pageTitle}</span>
          <h1 className="page-title-heading">{truncatedTitle}</h1>
          <nav className="page-title-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="page-title-sep" aria-hidden="true">/</span>
            <span className="page-title-current" title={props.pagesub}>
              {truncatedBreadcrumb}
            </span>
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
          white-space: nowrap;
        }

        .page-title-heading {
          font-family: var(--font-primary);
          font-size: clamp(24px, 4.5vw, 48px);
          font-weight: 700;
          color: var(--color-white);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
          max-width: 900px;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* Breadcrumb */
        .page-title-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;               
          gap: 6px 8px;
          font-family: var(--font-secondary);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          max-width: 100%;
          padding: 0 16px;              
          box-sizing: border-box;
        }

        .page-title-breadcrumb a {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .page-title-breadcrumb a:hover {
          color: var(--color-white);
        }

        

        /* Current page crumb — clamp to 1 line with ellipsis */
        .page-title-current {
          display: block;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #fff;

        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .page-title-wrap {
            padding: 140px 0 48px;
          }

          .page-title-heading {
            font-size: clamp(22px, 6vw, 32px);
            padding: 0 16px;
          }

           .news-details-wrapper .single-news-post .details-content h3{
            font-size:24px
            
            }

          .news-section-3{
          padding:40px 0}



          .page-title-breadcrumb {
            font-size: 12px;
            gap: 4px 6px;
          }
        }

        @media (max-width: 480px) {
          .page-title-heading {
            font-size: 22px;
          }
           

          /* On very small screens, hide the separator + current crumb
             and just show "Home" as the sole breadcrumb */
          .page-title-breadcrumb {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PageTitle;