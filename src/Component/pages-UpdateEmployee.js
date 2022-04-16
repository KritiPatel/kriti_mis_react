import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);

    // alert("update page")
    //  e.preventDefault();
    const dataAll = this.props.history.location.state.data;
    this.state = {
      firstName: dataAll.firstName,
      lastName: dataAll.lastName,
      email: dataAll.email,
      _id: "",
      designationIds: "",
      items: [],

    };
  }

  handleDsignation_value = (e) => {
    // alert(e.target.value + "kriti");

  this.state.designationIds = e.target.value
    console.log(e.target.value + "target_id");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    const dataAll = this.props.history.location.state.data;

  }

 

  handleChange = (data) => {
    console.log(data);
    this.setState({
      [data.target.name]: data.target.value,
    });
  };

  apicall = (e) => {
    e.preventDefault();

    // alert(this.state.firstName);

    const apiUrl = "http://localhost:5000/admin/add_employee";
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        designationIds: this.state.designationIds,
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
      let path = "emplist";
      this.props.history.push(path);
  };

  componentDidMount() {
    const api = "http://localhost:5000/admin/getOrg_Structure";
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // "62294a9d238d57aa2776e5e4": this.state.companyId,
        companyId: "62294a9d238d57aa2776e5e4",
        // companyId: this.state.companyId,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("hhello kriti");
        // console.log(res.data.designation._id);
        // console.log(res.data);
        console.log(res.data);
        console.log(res.data.designation);

        // console.log(this.state.companyId);
        this.setState({
          items: res.data.designation,
        });
       
      },[]);
  }



  render() {
    const { firstName, lastName, email, apicall, item ,items} = this.state;

    return (
    <div>

<div className="reglinks">
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />

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
                        <span className="d-none d-lg-block">MIS</span>
                      </a>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Update Employee in List
                          </h5>
                        </div>

                        <form
                          className="row g-3 needs-validation"
                          noValidate
                          method="post"
                          onSubmit={this.apicall}

                          // onSubmit={this.get_data}
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
                              Select Desgination
                            </label>
                            <select
                              className="form-control col-md-3"
                              onChange={this.handleDsignation_value}
                            >
                              <option value="0">Select</option>
                              {items.map((items) => (
                                <option key={items._id} value={items._id}>
                                  {items.name}
                                </option>
                              ))}
                            </select>
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
                              // onClick={this.apicall}
                              className="btn btn-primary w-100"
                              type="submit"
                              onClick={this.routeChange}
                              //  onClick={this.get_data}
                              // onClick={this.get_detail.bind(this, item._id)}
                            >
                              Update Employee
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
     

    </div>
       
    );
  }
}

export default UpdateEmployee;
