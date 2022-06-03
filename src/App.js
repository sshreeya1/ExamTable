import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Online from "./components/Online";
import Offline from "./components/Offline";

import Navbarmenu from "./components/menu/Navbarmenu";
import AAIIJournal from "./components/AAIIJournal";
import Markets from "./components/Markets";
import Portfolios from "./components/Portfolio";
import Investings from "./components/Investing";
import Screening from "./components/Screening";
import Community from "./components/Community";
import Education from "./components/Education";
import Investors from "./components/Investor";
// import CardContent from "./components/card/Card";

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbarmenu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Online" component={Online} />
          <Route path="/Offline" component={Offline} />
          <Route path="/AAII" component={AAIIJournal} />
          <Route path="/Markets" component={Markets} />
          <Route path="/Portfolios" component={Portfolios} />
          <Route path="/Investing" component={Investings} />
          <Route path="/Screening" component={Screening} />
          <Route path="/Community" component={Community} />
          <Route path="/Education" component={Education} />
          <Route path="/Investor" component={Investors} />
        </Switch>
      </Router>
      {/* <CardContent /> */}
    </div>
  );
}

export default App;
