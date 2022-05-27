import React from "react";
import { TextField, Button } from "@mui/material";
import UserList from "./../UserList";
const Business = ({ setUser, user, proceedNextTab, people }) => {
  const { BusinessName, GstNumber, address } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (BusinessName && GstNumber && address) {
      console.log(user);
    } else {
      alert("some fileds are empty ");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Business Name:{" "}
            <TextField
              type="text"
              name="BusinessName"
              value={BusinessName}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <label>
            GST-Number:{" "}
            <TextField
              type="number"
              name="GstNumber"
              value={GstNumber}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label>
            Address:{" "}
            <TextField
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <Button
            variant="contained"
            type="submit"
            onClick={() => proceedNextTab(2)}
          >
            Next
          </Button>
        </fieldset>
      </form>
      <UserList people={people} />
    </div>
  );
};

export default Business;
