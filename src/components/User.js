import React from "react";

export const User = ({ user }) => {
  // fn to formate date in dd/mm/yyyy
  const dateFormatter = (user) => {
    let dob = user.dob.date.slice(0, 10); //gets date from timestamp
    let formattedArr = dob.split("-"); //converts to array of [yyyy,mm,dd]
    let toDisplayDob = `${formattedArr[2]}-${formattedArr[1]}-${formattedArr[0]}`;
    return toDisplayDob;
  };

  return (
    <div className='table-item'>
      <div style={{ flex: 2 }}>
        {user.name.first} {user.name.last}
      </div>
      <div style={{ flex: 2 }}>{user.location.city}</div>
      <div style={{ flex: 1.5 }}>{user.location.postcode}</div>
      <div style={{ flex: 3 }}>{user.email}</div>
      <div style={{ flex: 2 }}>{user.cell}</div>
      <div style={{ flex: 2 }}>{dateFormatter(user)}</div>
    </div>
  );
};
