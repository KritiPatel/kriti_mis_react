import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        // console.log(res);
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
    alert("Helloo delete " + id);
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

        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
              <span className="d-none d-lg-block">NiceAdmin</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </div>

          <div className="search-bar">
            <form
              className="search-form d-flex align-items-center"
              method="POST"
              action="#"
            >
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
              />
              <button type="submit" title="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-bell"></i>
                  <span className="badge bg-primary badge-number">4</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">3</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    You have 3 new messages
                    <a href="#">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-1.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-2.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img
                        src="assets/img/messages-3.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                      <div>
                        <h4>David Muldon</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="users-profile.html"
                    >
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="users-profile.html"
                    >
                      <i className="bi bi-gear"></i>
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages-faq.html"
                    >
                      <i className="bi bi-question-circle"></i>
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link collapsed" href="index.html">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-heading">Pages</li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>F.A.Q</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-contact.html">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-register.html">
                <i className="bi bi-card-list"></i>
                <span>Register</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-login.html">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-error-404.html">
                <i className="bi bi-dash-circle"></i>
                <span>Error 404</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="pages-blank.html">
                <i className="bi bi-file-earmark"></i>
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>

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

        <footer id="footer" className="footer">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>NiceAdmin</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </footer>

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/chart.js/chart.min.js"></script>
        <script src="assets/vendor/echarts/echarts.min.js"></script>
        <script src="assets/vendor/quill/quill.min.js"></script>
        <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
        <script src="assets/vendor/tinymce/tinymce.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
      </>
    );
  }
}

export default EmployeeList;
