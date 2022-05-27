import React from "react";
import { TextField, Button } from "@mui/material";
import UserList from "./../UserList";
const Personal = ({ setUser, user, proceedNextTab, people }) => {
  const { firstName, lastName, email, age } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && age) {
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
            First Name:{" "}
            <TextField
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <label>
            Last Name:{" "}
            <TextField
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label>
            Email:{" "}
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label>
            Age:{" "}
            <TextField
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <Button
            variant="contained"
            type="submit"
            onClick={() => proceedNextTab(1)}
          >
            Next
          </Button>
        </fieldset>
      </form>
      <UserList people={people} />
    </div>
  );
};

export default Personal;
