import React, { Component } from "react";
import FormItem from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Button } from "react-bootstrap";

class Profile_ChangePasssword extends Component {
  
  constructor(props) {
    super(props);
    // this.routeChange = this.routeChange.bind(this);
      // get data from localStorage
    var object = JSON.parse(localStorage.getItem('userobject'))
    console.log(object._id + "sjchn")


    this.state = {
      items: [],
      // DataisLoaded: false,
      empId: object._id,
      oldPassword: "",
      newPassword:"",
      // newPassword:"",
      confirmPassword:"",

    };
  }
  
  
  routeChange_editprofile = () => {
    let path = "EditProfile";
    this.props.history.push(path);
    
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
 

  routeChange_overview = () => {
    let path = "pages-profile";
    this.props.history.push(path);
  };
  // routeChange_save_password =() => {
  //   let path = "pages-profile";
  //   this.props.history.push(path);
  // }
 api_change_passsword = (e) => {
    e.preventDefault();
    alert("heelooo change password api")

    // alert("change password api called")
 const api = "http://localhost:5000/admin/change_password";
    fetch(api, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        empId: this.state.empId,
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword,
        confirmPassword: this.state.confirmPassword
        
      }),
    })
    
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        if (res.status) {
          this.setState({
            items: res.data,
          });
          let path = "home";
          this.props.history.push(path);
        }
      });
  };

  render() {
    const {oldPassword, newPassword, confirmPassword} = this.state
    var object = JSON.parse(localStorage.getItem('userobject'))
    // console.log(object)


    return (
      <>
        <div>profile pages</div>
        <div className="profileslinks">
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />

          <title>Users / Profile </title>
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

        <Header></Header>
        <Sidebar></Sidebar>

        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Profile</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">Users</li>
                <li className="breadcrumb-item active">Profile</li>
              </ol>
            </nav>
          </div>
          <section className="section profile">
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img
                      src="assets/img/profile-img.jpg"
                      alt="Profile"
                      className="rounded-circle"
                    />
                    <h2>{object.firstName}{object.lastName}</h2>
                    <h3>Web Designer</h3>
                    <div className="social-links mt-2">
                      <a href="#" className="twitter">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* row end */}

              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body pt-3">
                    <ul className="nav nav-tabs nav-tabs-bordered">
                      <li className="nav-item">
                        <button
                          className="nav-link "
                          data-bs-toggle="tab"
                          data-bs-target="#profile-overview"
                          onClick={this.routeChange_overview}
                        >
                          Overview
                        </button>
                      </li>

                      <li class="nav-item">
                        <button
                          class="nav-link"
                          data-bs-toggle="tab"
                          onClick={this.routeChange_editprofile}
                          data-bs-target="#profile-edit"
                        >
                          Edit Profile
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          class="nav-link active"
                          // onClick={this.api_change_passsword}
                        >
                          Change Password
                        </button>
                      </li>
                    </ul>

                    {/* card beginn */}
                    <div className="tab-content pt-2">
                      <div>
                        <div class="card"></div>

                        <form method="post" onSubmit={this.api_change_passsword}>
                          <div class="row mb-3">
                            <label
                              for="currentPassword"
                              class="col-md-4 col-lg-3 col-form-label"
                              
                            >
                              Current Password
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="oldPassword"
                                type="password"
                                class="form-control"
                                id="oldPassword"
                                value={oldPassword}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="newPassword"
                              
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              New Password
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="newPassword"
                                type="password"
                                class="form-control"
                                id="newPassword"
                                value={newPassword}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="confirmPassword"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              Re-enter New Password
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="confirmPassword"
                                type="password"
                                class="form-control"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange= {this.handleChange}
                              />
                            </div>

                            <div class="text-center">
                              <button type="submit" class="btn btn-primary" onClick={this.api_change_passsword}>
                                Change Password
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* profile edit close div */}
                    </div>

                    {/* edit profile */}
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

export default Profile_ChangePasssword;
