// import React, { Component, useState } from "react";
// import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(data => data.json())
// }

// export default function Login({setToken}) {
//   const [firstName, setfirstName] = useState();
//   const [lastName, setlastName] = useState();
//   const [email, setemail] = useState();
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }
// }

// import React, { Component } from "react";

// className Login extends Component {

//   render() {
//     return (
//       <>
//         <div className="loginlink">
//           <head>
//             <meta charset="utf-8" />
//             <meta
//               content="width=device-width, initial-scale=1.0"
//               name="viewport"
//             />

//             <title>Pages / Login - NiceAdmin Bootstrap Template</title>
//             <meta content="" name="description" />
//             <meta content="" name="keywords" />

//             <link href="assets/img/favicon.png" rel="icon" />
//             <link
//               href="assets/img/apple-touch-icon.png"
//               rel="apple-touch-icon"
//             />

//             <link href="https://fonts.gstatic.com" rel="preconnect" />
//             <link
//               href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
//               rel="stylesheet"
//             />

//             <link
//               href="assets/vendor/bootstrap/css/bootstrap.min.css"
//               rel="stylesheet"
//             />
//             <link
//               href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
//               rel="stylesheet"
//             />
//             <link
//               href="assets/vendor/boxicons/css/boxicons.min.css"
//               rel="stylesheet"
//             />
//             <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
//             <link
//               href="assets/vendor/quill/quill.bubble.css"
//               rel="stylesheet"
//             />
//             <link
//               href="assets/vendor/remixicon/remixicon.css"
//               rel="stylesheet"
//             />
//             <link
//               href="assets/vendor/simple-datatables/style.css"
//               rel="stylesheet"
//             />

//             <link href="assets/css/style.css" rel="stylesheet" />
//           </head>
//         </div>

//         <main>
//           <div className="container">
//             <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                     <div className="d-flex justify-content-center py-4">
//                       <a
//                         href="index.html"
//                         className="logo d-flex align-items-center w-auto"
//                       >
//                         <img src="assets/img/logo.png" alt="" />
//                         <span className="d-none d-lg-block">NiceAdmin</span>
//                       </a>
//                     </div>

//                     <div className="card mb-3">
//                       <div className="card-body">
//                         <div className="pt-4 pb-2">
//                           <h5 className="card-title text-center pb-0 fs-4">
//                             Login to Your Account
//                           </h5>
//                           <p className="text-center small">
//                             Enter your username & password to login
//                           </p>
//                         </div>

//                         <form className="row g-3 needs-validation" novalidate>
//                           <div className="col-12">
//                             <label for="yourUsername" className="form-label">
//                               Username
//                             </label>
//                             <div className="input-group has-validation">
//                               <span
//                                 className="input-group-text"
//                                 id="inputGroupPrepend"
//                               >
//                                 @
//                               </span>
//                               <input
//                                 type="text"
//                                 name="username"
//                                 className="form-control"
//                                 id="yourUsername"
//                                 required
//                               />
//                               <div className="invalid-feedback">
//                                 Please enter your username.
//                               </div>
//                             </div>
//                           </div>

//                           <div className="col-12">
//                             <label for="yourPassword" className="form-label">
//                               Password
//                             </label>
//                             <input
//                               type="password"
//                               name="password"
//                               className="form-control"
//                               id="yourPassword"
//                               required
//                             />
//                             <div className="invalid-feedback">
//                               Please enter your password!
//                             </div>
//                           </div>

//                           <div className="col-12">
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 name="remember"
//                                 value="true"
//                                 id="rememberMe"
//                               />
//                               <label className="form-check-label" for="rememberMe">
//                                 Remember me
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <button className="btn btn-primary w-100" type="submit">
//                               Login
//                             </button>
//                           </div>
//                           <div className="col-12">
//                             <p className="small mb-0">
//                               Don't have account?{" "}
//                               <a href="pages-register.html">
//                                 Create an account
//                               </a>
//                             </p>
//                           </div>
//                         </form>
//                       </div>
//                     </div>

//                     <div className="credits">
//                       {/* <!-- All the links in the footer should remain intact. -->
//                 <!-- You can delete the links only if you purchased the pro version. -->
//                 <!-- Licensing information: https://bootstrapmade.com/license/ -->
//                 <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
//                 Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </main>

//         <a
//           href="#"
//           className="back-to-top d-flex align-items-center justify-content-center"
//         >
//           <i className="bi bi-arrow-up-short"></i>
//         </a>
//         {/*

//   <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
//   <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
//   <script src="assets/vendor/chart.js/chart.min.js"></script>
//   <script src="assets/vendor/echarts/echarts.min.js"></script>
//   <script src="assets/vendor/quill/quill.min.js"></script>
//   <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
//   <script src="assets/vendor/tinymce/tinymce.min.js"></script>
//   <script src="assets/vendor/php-email-form/validate.js"></script> */}

//         <script src="assets/js/main.js"></script>
//       </>
//     );
//   }
// }

// export default Login;

import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.routeChange = this.routeChange.bind(this);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    const apiUrl = "http://localhost:5000/login";
    fetch(apiUrl,
      )
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
        <div className="loginlink">
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />

          <title>Pages / Login - NiceAdmin Bootstrap Template</title>
          <meta content="" name="description" />
          <meta content="" name="keywords" />

          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />

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

        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-center py-4">
                      <a
                        href="index.html"
                        className="logo d-flex align-items-center w-auto"
                      >
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">NiceAdmin</span>
                      </a>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Login to Your Account
                          </h5>
                          <p className="text-center small">
                            Enter your username & password to login
                          </p>
                        </div>

                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label for="yourUsername" className="form-label">
                              Username
                            </label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                id="email"
                                onChange={(event) =>
                                  this.setState({ email: event.target.value })
                                }
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter your username.
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label for="yourPassword" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              onChange={(event) =>
                                this.setState({ password: event.target.value })
                              }
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                                value="true"
                                id="rememberMe"
                              />
                              <label
                                className="form-check-label"
                                for="rememberMe"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onClick={() => {
                                this.login();
                              }}
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have account?{" "}
                              <a href="pages-register.html">
                                Create an account
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="credits">
                      {/* <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        {/* 
  
  <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/chart.js/chart.min.js"></script>
  <script src="assets/vendor/echarts/echarts.min.js"></script>
  <script src="assets/vendor/quill/quill.min.js"></script>
  <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script> */}

        <script src="assets/js/main.js"></script>
      </>
    );
  }
}

export default Login;
