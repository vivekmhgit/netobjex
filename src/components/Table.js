import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginator from "./Paginator";
import { User } from "./User";
export const Table = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error.errorMsg);
      });
  }, []);

  const iLastUser = currentPage * itemsPerPage;
  const iFirstUser = iLastUser - itemsPerPage;
  const currentUsers = users.slice(iFirstUser, iLastUser);
  const paginate = (dir, totPagesReq) => {
    if (dir === "next" && currentPage < totPagesReq) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (dir === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className='table-card'>
      <div className='table-header'>
        <div>Name</div>
        <div>City</div>
        <div>Pin Code</div>
        <div>Email ID</div>
        <div>Mobile</div>
        <div>DOB</div>
      </div>
      {currentUsers.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
      <div className='paginator'>
        <Paginator
          itemsPerPage={itemsPerPage}
          totalUsers={users.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
