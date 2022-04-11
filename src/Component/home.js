import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Dashboard from "./dash";
import ComponentAccordian from "./components-accordion";
class Home extends Component {
  render() {
    return (
<>

<div>Home page </div>
    <Header/>
    <Sidebar/>
    {/* <div> */}
        
      {/* <Router>
        <Switch>
          <Route  path="/a" component={ComponentAccordian} />
        </Switch>
        <Switch>
          <Route exact path="/bbb" component={ComponentAccordian} />
        </Switch>
      </Router>
    </div> */}
    <Dashboard/>
    <Footer/>
    <ComponentAccordian/>

</>
    )
  }
}

export default Home;
