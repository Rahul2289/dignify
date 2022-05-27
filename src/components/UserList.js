import React from "react";

const UserList = ({ people }) => {
  return (
    <div
      style={{
        fontSize: "18px",
        padding: "0.5rem",
        width: "60vw",
        maxWidth: "500px",
        minWidth: "300px",
        margin: "0 auto",
      }}
    >
      <h4 style={{ textAlign: "center" }}>List Of Users</h4>
      {people.map((users) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "5px 0",
              padding: "0.5rem",
            }}
          >
            <h6>
              Name: {users.firstName} {users.lastName}
            </h6>
            <h6>Email: {users.email}</h6>
            <h6>Age: {users.age}</h6>
            <h6>Business Name: {users.BusinessName}</h6>
            <h6>Gst Number: {users.GstNumber}</h6>
            <h6>Address: {users.address}</h6>
            <h6>loanAmount: {users.loanAmount}</h6>
            <h6>loanInterest: {users.loanInterest}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
