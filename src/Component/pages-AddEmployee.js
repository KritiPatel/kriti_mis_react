import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {Dropdown} from "react-bootstrap"

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }


  
  
  // routeChange = (id, _id) => {
  //   // alert("hellooooo update" + id)
  //   // alert("why you are not working bro!!!")
  //   let path = "AddEmp";
  //   this.props.history.push(path);
  // };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,  
    });
  };

  apicall = (e) => {
    e.preventDefault();

    alert(this.state.firstName);

    const apiUrl = "http://localhost:5000/admin/add_employee";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      }),
    })
      .then((response) => response.json())

      .then((res) => {
        console.log(res);
        console.log(res.firstName);
        this.setState({
          items: res.data,
          DataisLoaded: true,
        });
        // ,
        // []
      });
  };

  render() {
    const { firstName, lastName, email, role, componentDidMount, apicall } =
      this.state;

    return (
      <>
        <>
          <div className="reglinks">
            <meta charSet="utf-8" />
            <meta
              content="width=device-width, initial-scale=1.0"
              name="viewport"
            />

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
                          <span className="d-none d-lg-block">MIS</span>
                        </a>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="pt-4 pb-2">
                            <h5 className="card-title text-center pb-0 fs-4">
                              Add Employee in List
                            </h5>
                          </div>

                          <form
                            className="row g-3 needs-validation"
                            noValidate
                            method="post"
                            onSubmit={this.apicall}
                          >
                            {/* onSubmit={handleSubmit} */}
                            <div className="col-12">
                              <label htmlFor="yourName" className="form-label">
                                FirstName
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                id="yourName"
                                value={firstName}
                                onChange={this.handleChange}
                                required
                              />
                              <div className="invalid-feedback">
                                Please, enter your firstname!
                              </div>
                            </div>

                            <div className="col-12">
                              <label htmlFor="yourName" className="form-label">
                                LastName
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                id="yourName"
                                value={lastName}
                                onChange={this.handleChange}
                                required
                              />
                              <div className="invalid-feedback">
                                Please, enter your lastname!
                              </div>
                            </div>

                            <div className="col-12">
                              <label htmlFor="yourEmail" className="form-label">
                                Your Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="yourEmail"
                                value={email}
                                onChange={this.handleChange}
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter a valid Email adddress!
                              </div>
                            </div>
                            <div className="col-12">
                              <label htmlFor="yourEmail" className="form-label">
                                Your Role:
                              </label>


{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Your Role:
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Employee</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Employee Managment action</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>                    */}
                             
                            </div>

                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  name="terms"
                                  type="checkbox"
                                  value=""
                                  id="acceptTerms"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="acceptTerms"
                                >
                                  I agree and accept the{" "}
                                  <a href="#">terms and conditions</a>
                                </label>
                                <div className="invalid-feedback">
                                  You must agree before submitting.
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <Button
                                onClick={this.apicall}
                                className="btn btn-primary w-100"
                                type="submit"
                              >
                                Add Employee
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="credits"></div>
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

          <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
          <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="assets/vendor/chart.js/chart.min.js"></script>
          <script src="assets/vendor/echarts/echarts.min.js"></script>
          <script src="assets/vendor/quill/quill.min.js"></script>
          <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
          <script src="assets/vendor/tinymce/tinymce.min.js"></script>
          <script src="assets/vendor/php-email-form/validate.js"></script>

          {/* <script src="assets/js/main.js"></script> */}
        </>
      </>
    );
  }
}

export default AddEmployee;


//======================================================================

// import React, { Component, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import {Dropdown} from "react-bootstrap"

// class AddEmployee extends Component {
//   constructor(props) {
//     super(props);

//     this.intialstate = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       _id: "",
//     };
  
//   if(props.items){
//     this.state = props.emp
//   }
//   else{
//     this.state = this.intialstate;
//   }
//   } 
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   apicall = (e) => {
//     e.preventDefault();

//     alert(this.state.firstName);

//     const apiUrl = "http://localhost:5000/admin/add_employee";
//     fetch(apiUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         email: this.state.email,
//       }),
//     })
//       .then((response) => response.json())

//       .then((res) => {
//         console.log(res);
//         console.log(res.firstName);
//         this.setState({
//           items: res.data,
//           DataisLoaded: true,
//         });
//         // ,
//         // []
//       });
//   };

//   updateemployee = (id) =>{
//     const apiUrl = "http://localhost:5000/admin/employee_list"
//   }
//   render() {
//     const { firstName, lastName, email, role, componentDidMount, apicall } =
//       this.state;

//     return (
//       <>
//         <>
//           <div className="reglinks">
//             <meta charSet="utf-8" />
//             <meta
//               content="width=device-width, initial-scale=1.0"
//               name="viewport"
//             />

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
//           </div>

//           <main>
//             <div className="container">
//               <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                 <div className="container">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                       <div className="d-flex justify-content-center py-4">
//                         <a
//                           href="index.html"
//                           className="logo d-flex align-items-center w-auto"
//                         >
//                           <img src="assets/img/logo.png" alt="" />
//                           <span className="d-none d-lg-block">MIS</span>
//                         </a>
//                       </div>

//                       <div className="card mb-3">
//                         <div className="card-body">
//                           <div className="pt-4 pb-2">
//                             <h5 className="card-title text-center pb-0 fs-4">
//                               Add Employee in List
//                             </h5>
//                           </div>

//                           <form
//                             className="row g-3 needs-validation"
//                             noValidate
//                             method="post"
//                             onSubmit={this.apicall}
//                           >
//                             {/* onSubmit={handleSubmit} */}
//                             <div className="col-12">
//                               <label htmlFor="yourName" className="form-label">
//                                 FirstName
//                               </label>
//                               <input
//                                 type="text"
//                                 name="firstName"
//                                 className="form-control"
//                                 id="yourName"
//                                 value={firstName}
//                                 onChange={this.handleChange}
//                                 required
//                               />
//                               <div className="invalid-feedback">
//                                 Please, enter your firstname!
//                               </div>
//                             </div>

//                             <div className="col-12">
//                               <label htmlFor="yourName" className="form-label">
//                                 LastName
//                               </label>
//                               <input
//                                 type="text"
//                                 name="lastName"
//                                 className="form-control"
//                                 id="yourName"
//                                 value={lastName}
//                                 onChange={this.handleChange}
//                                 required
//                               />
//                               <div className="invalid-feedback">
//                                 Please, enter your lastname!
//                               </div>
//                             </div>

//                             <div className="col-12">
//                               <label htmlFor="yourEmail" className="form-label">
//                                 Your Email
//                               </label>
//                               <input
//                                 type="email"
//                                 name="email"
//                                 className="form-control"
//                                 id="yourEmail"
//                                 value={email}
//                                 onChange={this.handleChange}
//                                 required
//                               />
//                               <div className="invalid-feedback">
//                                 Please enter a valid Email adddress!
//                               </div>
//                             </div>
//                             <div className="col-12">
//                               <label htmlFor="yourEmail" className="form-label">
//                                 Your Role:
//                               </label>


// {/* <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//   Your Role:
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Employee</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Employee Managment action</Dropdown.Item>
   
//   </Dropdown.Menu>
// </Dropdown>                    */}
                             
//                             </div>

//                             <div className="col-12">
//                               <div className="form-check">
//                                 <input
//                                   className="form-check-input"
//                                   name="terms"
//                                   type="checkbox"
//                                   value=""
//                                   id="acceptTerms"
//                                   required
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="acceptTerms"
//                                 >
//                                   I agree and accept the{" "}
//                                   <a href="#">terms and conditions</a>
//                                 </label>
//                                 <div className="invalid-feedback">
//                                   You must agree before submitting.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-12">
//                               <Button
//                                 onClick={this.apicall}
//                                 className="btn btn-primary w-100"
//                                 type="submit"
//                               >
//                                 Add Employee
//                               </Button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>

//                       <div className="credits"></div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </main>

//           <a
//             href="#"
//             className="back-to-top d-flex align-items-center justify-content-center"
//           >
//             <i className="bi bi-arrow-up-short"></i>
//           </a>

//           <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
//           <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
//           <script src="assets/vendor/chart.js/chart.min.js"></script>
//           <script src="assets/vendor/echarts/echarts.min.js"></script>
//           <script src="assets/vendor/quill/quill.min.js"></script>
//           <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
//           <script src="assets/vendor/tinymce/tinymce.min.js"></script>
//           <script src="assets/vendor/php-email-form/validate.js"></script>

//           {/* <script src="assets/js/main.js"></script> */}
//         </>
//       </>
//     );
//   }
// }

// export default AddEmployee;
