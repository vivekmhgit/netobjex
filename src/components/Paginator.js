import React from "react";

const Paginator = ({ itemsPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const totPagesReq = Math.ceil(totalUsers / itemsPerPage);

  for (let i = 1; i <= totPagesReq; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <a onClick={() => paginate(page)} href='!#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
