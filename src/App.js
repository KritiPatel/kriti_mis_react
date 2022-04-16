import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/pages-login";
import Blankpage from "./Component/pages-blank";
import Contactpage from "./Component/pages-contact";
import Faqpages from "./Component/pages-faq";
import Errorpage from "./Component/pages-error-404";
import Registerpage from "./Component/pages-register";
import Profilepage from "./Component/pages-profile";
import EmployeeList from "./Component/pages-employeeList"
import AddEmployee from "./Component/pages-AddEmployee";
import  UpdateEmployee from "./Component/pages-UpdateEmployee"


// import ‘./App.css’;
// import '../public/assets/css'
import Home from "./Component/home";
// import ComponentAccordian from "./Component/components-accordion";

import Sidebar from "./Component/sidebar";

function App() {
  return (
    <div className="App" >
    
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
        
        <Switch>
          <Route exact path="/pages-profile" component={Profilepage} />
        </Switch>
        <Switch>
          <Route exact path="/pages-faq" component={Faqpages} />
        </Switch>  
           <Switch>
          <Route exact path="/pages-contact" component={Contactpage} />
        </Switch> 
          <Switch>
          <Route exact path="/pages-register" component={Registerpage} />
        </Switch> 
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch> 
        <Switch>
          <Route exact path="/pages-error" component={Errorpage} />
        </Switch> 
        <Switch>
          <Route exact path="/pages-blank" component={Blankpage} />
        </Switch>   
      
      <Switch>
      <Route exact path="/emplist" component={EmployeeList} />
        </Switch> 
        <Switch>
      <Route exact path="/AddEmp" component={AddEmployee} />
        </Switch>  
        <Switch>
      <Route exact path="/UpdateEmp" component={UpdateEmployee} />
        </Switch>   
      </Router>
      
  
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
