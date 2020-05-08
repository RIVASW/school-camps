import React from 'react';

const Pagination = ({ campsPerPage, totalCamps, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCamps / campsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center pg-teal'>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active page-item' : 'page-item'}>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;