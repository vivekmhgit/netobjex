import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginator from "./Paginator";
export const Table = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        setError(error.errorMsg);
      });
  }, []);
  console.log(users);

  const iLastUser = currentPage * itemsPerPage;
  const iFirstUser = iLastUser - itemsPerPage;
  const currentUsers = users.slice(iFirstUser, iLastUser);
  const paginate = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='table-card'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Email ID</th>
            <th>Mobile</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => {
            return (
              <tr key={user.login.uuid}>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.location.city}</td>
                <td>{user.location.postcode}</td>
                <td>{user.email}</td>
                <td>{user.cell}</td>
                <td>{user.dob.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paginator
        itemsPerPage={itemsPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};
