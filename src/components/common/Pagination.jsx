import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ prev, next, onNavigate }) => {
  if (!prev && !next) return null;
  return (
    <div className="pagination-nav">
      {prev ? (
        <button onClick={() => onNavigate(prev.id)} className="pagination-btn prev">
          <FaArrowLeft />
          <span>
            <small>{prev.shortTitle}</small>
            {prev.title}
          </span>
        </button>
      ) : <div /> }
      {next && (
        <button onClick={() => onNavigate(next.id)} className="pagination-btn next">
          <span>
            <small>{next.shortTitle}</small>
            {next.title}
          </span>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};
export default Pagination;