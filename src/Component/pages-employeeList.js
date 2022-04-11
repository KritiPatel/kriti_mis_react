import React, { Component } from "react";

class EmployeeList extends Component {
  

    constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      items: [],
      DataisLoaded: false,
     
    };
  }
  routeChange() {
    let path = `AddEmp`;
    this.props.history.push(path);
  }

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
  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <>
        <div className="emplink">
          <head>
            <meta charset="utf-8" />
            <meta
              content="width=device-width, initial-scale=1.0"
              name="viewport"
            />
            <title>Tables / General - NiceAdmin Bootstrap Template</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />
            <link href="assets/img/favicon.png" rel="icon" />
            <link
              href="assets/img/apple-touch-icon.png"
              rel="apple-touch-icon"
            />
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
            <link
              href="assets/vendor/quill/quill.bubble.css"
              rel="stylesheet"
            />
            <link
              href="assets/vendor/remixicon/remixicon.css"
              rel="stylesheet"
            />
            <link
              href="assets/vendor/simple-datatables/style.css"
              rel="stylesheet"
            />
            <link href="assets/css/style.css" rel="stylesheet" />
          </head>
        </div>

        <body>
          <header
            id="header"
            class="header fixed-top d-flex align-items-center"
          >
            <div class="d-flex align-items-center justify-content-between">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span class="d-none d-lg-block">NiceAdmin</span>
              </a>
              <i class="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div class="search-bar">
              <form
                class="search-form d-flex align-items-center"
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
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>

            <nav class="header-nav ms-auto">
              <ul class="d-flex align-items-center">
                <li class="nav-item d-block d-lg-none">
                  <a class="nav-link nav-icon search-bar-toggle " href="#">
                    <i class="bi bi-search"></i>
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-icon"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bi bi-bell"></i>
                    <span class="badge bg-primary badge-number">4</span>
                  </a>

                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li class="dropdown-header">
                      You have 4 new notifications
                      <a href="#">
                        <span class="badge rounded-pill bg-primary p-2 ms-2">
                          View all
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="notification-item">
                      <i class="bi bi-exclamation-circle text-warning"></i>
                      <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                      </div>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="notification-item">
                      <i class="bi bi-x-circle text-danger"></i>
                      <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                      </div>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="notification-item">
                      <i class="bi bi-check-circle text-success"></i>
                      <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                      </div>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="notification-item">
                      <i class="bi bi-info-circle text-primary"></i>
                      <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li class="dropdown-footer">
                      <a href="#">Show all notifications</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-icon"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bi bi-chat-left-text"></i>
                    <span class="badge bg-success badge-number">3</span>
                  </a>

                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li class="dropdown-header">
                      You have 3 new messages
                      <a href="#">
                        <span class="badge rounded-pill bg-primary p-2 ms-2">
                          View all
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="message-item">
                      <a href="#">
                        <img
                          src="assets/img/messages-1.jpg"
                          alt=""
                          class="rounded-circle"
                        />
                        <div>
                          <h4>Maria Hudson</h4>
                          <p>
                            Velit asperiores et ducimus soluta repudiandae
                            labore officia est ut...
                          </p>
                          <p>4 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="message-item">
                      <a href="#">
                        <img
                          src="assets/img/messages-2.jpg"
                          alt=""
                          class="rounded-circle"
                        />
                        <div>
                          <h4>Anna Nelson</h4>
                          <p>
                            Velit asperiores et ducimus soluta repudiandae
                            labore officia est ut...
                          </p>
                          <p>6 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="message-item">
                      <a href="#">
                        <img
                          src="assets/img/messages-3.jpg"
                          alt=""
                          class="rounded-circle"
                        />
                        <div>
                          <h4>David Muldon</h4>
                          <p>
                            Velit asperiores et ducimus soluta repudiandae
                            labore officia est ut...
                          </p>
                          <p>8 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li class="dropdown-footer">
                      <a href="#">Show all messages</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown pe-3">
                  <a
                    class="nav-link nav-profile d-flex align-items-center pe-0"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="assets/img/profile-img.jpg"
                      alt="Profile"
                      class="rounded-circle"
                    />
                    <span class="d-none d-md-block dropdown-toggle ps-2">
                      K. Anderson
                    </span>
                  </a>

                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="users-profile.html"
                      >
                        <i class="bi bi-person"></i>
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="users-profile.html"
                      >
                        <i class="bi bi-gear"></i>
                        <span>Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="pages-faq.html"
                      >
                        <i class="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>

          <aside id="sidebar" class="sidebar">
            <ul class="sidebar-nav" id="sidebar-nav">
              <li class="nav-item">
                <a class="nav-link collapsed" href="index.html">
                  <i class="bi bi-grid"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              <li class="nav-heading">Pages</li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="users-profile.html">
                  <i class="bi bi-person"></i>
                  <span>Profile</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-faq.html">
                  <i class="bi bi-question-circle"></i>
                  <span>F.A.Q</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-contact.html">
                  <i class="bi bi-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-register.html">
                  <i class="bi bi-card-list"></i>
                  <span>Register</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-login.html">
                  <i class="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-error-404.html">
                  <i class="bi bi-dash-circle"></i>
                  <span>Error 404</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link collapsed" href="pages-blank.html">
                  <i class="bi bi-file-earmark"></i>
                  <span>Blank</span>
                </a>
              </li>
            </ul>
          </aside>

          <main id="main" class="main">
         

            <section class="section">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Employee List </h5>
                      <button
                        type="button"
                        className="btn btn-dark "
                        onClick={this.routeChange}
                        

                        style={{ float: "right" }}
                      >
                        Add Employee
                      </button>

                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Start Date</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((item) => (
                            <tr>
                              <th scope="row">1</th>
                              <td> {item.firstName}</td>
                              <td>{item.lastName}</td>
                              <td>{item.email}</td>
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

          <footer id="footer" class="footer">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>NiceAdmin</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits"></div>
          </footer>

          <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-arrow-up-short"></i>
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
        </body>
      </>
    );
  }
}

export default EmployeeList;
