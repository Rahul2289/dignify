import "./App.css";
import React, { useState } from "react";
import TabPanel from "./components/TabPanel";

function App() {
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState({
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

  return (
    <>
      <TabPanel
        setUser={setUser}
        user={user}
        people={people}
        setPeople={setPeople}
      />
    </>
  );
}

export default App;
