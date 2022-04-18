import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer"
// const axios = require('axios');

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    // this.routeChange = this.routeChange.bind(this);

    this.state = {
      items: [],
      DataisLoaded: false,
      _id: "",
    };
  }

  routeChange = (id, _id) => {
    // alert("hellooooo update" + id)
    // alert("why you are not working bro!!!")
    let path = "AddEmp";
    this.props.history.push(path);
  };

  componentDidMount() {
    const apiUrl = "http://localhost:5000/admin/employee_list";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data.data,
          DataisLoaded: true,
        });
        //   ,
        //   []
      });
  }

  get_emp = (id, empId,res) => {
    // const apiUrl = "http://localhost:5000/get_employeesdetail";
    // console.log("Helloo edit d" + id);
    fetch(`http://localhost:5000/admin/get_emp_detail?empId=${id}`, {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
console.log("get user detail")
console.log("======kriti===get detaill")        
console.log(res);
        // console.log(res.data.firstName)
        // console.log(res.data.lastName)
        // console.log(res.data.email)
        let path = `UpdateEmp`;
        this.props.history.push(path, {data: res.data});
        

        this.setState({
          items: res.data,
          // firstName: items.firstName
          
          // DataisLoaded: true,
        });
        // ,
        // []
      });
  }; 

  delete_emp = (id, _id) => {
    // alert("Helloo delete " + id);
    console.log(id);
    fetch(`http://localhost:5000/admin/delete_employee`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        console.log(_id);
        this.setState({
          items: res.data,
          // DataisLoaded: true,
        });
        
        // ,
        // []
        

      });
      let path = "emplist";
      this.props.history.push(path);
  };

  render() {
    const { DataisLoaded, items, res, e } = this.state;

    return (
      <>
        <div className="emplink">
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Tables / General - NiceAdmin Bootstrap Template</title>
          <meta content="" name="description" />
          <meta content="" name="keywords" />
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          \
          <link
            href="assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
          <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link
            href="assets/vendor/simple-datatables/style.css"
            rel="stylesheet"
          />
          <link href="assets/css/style.css" rel="stylesheet" />
        </div>

       <Header></Header>
       <Sidebar></Sidebar>

       

        <main id="main" className="main">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Employee List </h5>
                    <Button
                      type="button"
                      className="btn btn-dark "
                      onClick={this.routeChange}
                      style={{ float: "right" }}
                    >
                      Add Employee
                    </Button>

                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th scope="col">#</th> */}
                          <th scope="col">FirstName</th>
                          <th scope="col">LastName</th>
                          <th scope="col">Email</th>
                          {/* <th scope="col">Start Date</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr>
                            {/* <th scope="row">1</th> */}
                            <td> {item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>
                              {" "}
                              <Button
                                type="button"
                                className="btn btn-primary btn-sm mx-2"
                                // onClick={this.update_emp.bind(this, item._id)}
                                //  onClick={this.routeChange.bind(this,item._id, item)}
                                // onClick={this.get_emp.bind(this, item._id)}
                                onClick={this.get_emp.bind(this, item._id)}
                                style={{ float: "right" }}
                              >
                                Edit
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-warning btn-sm mx-2"
                                onClick={this.delete_emp.bind(this, item._id)}
                                style={{ float: "right" }}
                              >
                                Delete
                              </Button>
                            </td>
                            {/* <td>{item.email}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

     
<Footer></Footer>
        
      </>
    );
  }
}

export default EmployeeList;
