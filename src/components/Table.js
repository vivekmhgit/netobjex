import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginator from "./Paginator";
import { User } from "./User";

export const Table = () => {
  const [users, setUsers] = useState([]); //for storing user data
  const [currentPage, setCurrentPage] = useState(1); //for storing current page info
  const itemsPerPage = 4;

  // api call in useEffect Hook
  useEffect(() => {
    fetchUsersData();
  }, []);

  //api call function using axios
  const fetchUsersData = () => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error.errorMsg);
      });
  };

  const iLastUser = currentPage * itemsPerPage;
  const iFirstUser = iLastUser - itemsPerPage;
  const currentUsers = users.slice(iFirstUser, iLastUser); //has items for current page

  //fn to update current page
  const paginate = (dir, totPagesReq) => {
    if (dir === "next" && currentPage < totPagesReq) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (dir === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // render logic
  if (users.length) {
    return (
      <div className='table-card'>
        <div className='table-header'>
          <div style={{ flex: 2 }}>Name</div>
          <div style={{ flex: 2 }}>City</div>
          <div style={{ flex: 1.5 }}>Pin Code</div>
          <div style={{ flex: 3 }}>Email ID</div>
          <div style={{ flex: 2 }}>Mobile</div>
          <div style={{ flex: 2 }}>DOB</div>
        </div>
        {currentUsers.map((user) => (
          <User key={user.login.uuid} user={user} /> //uuid used as key
        ))}

        {/* paginator component */}
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
  } else {
    return (
      <div className='table-card'>
        <div className='error-message'>some error occured</div>
      </div>
    );
  }
};
