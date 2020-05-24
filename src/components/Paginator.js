import React from "react";

const Paginator = ({ itemsPerPage, totalUsers, paginate, currentPage }) => {
  const totPagesReq = Math.ceil(totalUsers / itemsPerPage);
  const range1 = (currentPage - 1) * itemsPerPage + 1;
  const range2 =
    currentPage === totPagesReq ? totalUsers : range1 + itemsPerPage - 1;

  return (
    <div>
      {range1}-{range2} of {totalUsers}
      <span className='link' onClick={() => paginate("prev", totPagesReq)}>
        {" "}
        Prev |
      </span>
      <span className='link' onClick={() => paginate("next", totPagesReq)}>
        {" "}
        Next
      </span>
    </div>
  );
};

export default Paginator;
