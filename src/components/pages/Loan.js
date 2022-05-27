import React from "react";
import { TextField, Button } from "@mui/material";
import UserList from "./../UserList";
const Loan = ({ setUser, user, people, setPeople }) => {
  const {
    firstName,
    lastName,
    email,
    age,
    BusinessName,
    GstNumber,
    address,
    loanAmount,
    loanInterest,
    LoanTenure,
  } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      age &&
      BusinessName &&
      GstNumber &&
      address &&
      loanAmount &&
      loanInterest &&
      LoanTenure
    ) {
      const newPerson = { ...user, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        BusinessName: "",
        GstNumber: "",
        address: "",
        loanAmount: "",
        loanInterest: "",
        LoanTenure: "",
      });
      console.log(people);
    } else {
      alert("some fileds are empty ");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Loan Amount:{" "}
            <TextField
              type="number"
              name="loanAmount"
              value={loanAmount}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <label>
            Loan interest:{" "}
            <TextField
              type="number"
              name="loanInterest"
              value={loanInterest}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label>
            Loan Tenure in Months:{" "}
            <TextField
              type="number"
              name="LoanTenure"
              value={LoanTenure}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </fieldset>
      </form>
      {<UserList people={people} />}
    </div>
  );
};

export default Loan;
