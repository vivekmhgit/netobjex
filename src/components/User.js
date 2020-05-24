import React, { Fragment } from "react";

export const User = ({ user }) => {
  const dateFormatter = (user) => {
    let dob = user.dob.date.slice(0, 10);
    let formatted = dob.split("-");
    let toDisplayDob = `${formatted[2]}-${formatted[1]}-${formatted[0]}`;
    return toDisplayDob;
  };

  return (
    <div className='table-item'>
      <div>
        {user.name.first} {user.name.last}
      </div>
      <div>{user.location.city}</div>
      <div>{user.location.postcode}</div>
      <div>{user.email}</div>
      <div>{user.cell}</div>
      <div>{dateFormatter(user)}</div>
    </div>
  );
};
