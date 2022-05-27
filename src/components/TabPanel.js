import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Loan from "./pages/Loan";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ setUser, user, people, setPeople }) {
  const [value, setValue] = React.useState(0);
  const proceedNextTab = (val) => setValue(val);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} sm="400px">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal details" {...a11yProps(0)} />
          <Tab label="business details" {...a11yProps(1)} />
          <Tab label="loan details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Personal
          setUser={setUser}
          user={user}
          proceedNextTab={proceedNextTab}
          people={people}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Business
          setUser={setUser}
          user={user}
          proceedNextTab={proceedNextTab}
          people={people}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Loan
          setUser={setUser}
          user={user}
          people={people}
          setPeople={setPeople}
        />
      </TabPanel>
    </Box>
  );
}
