import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Profilepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName:"",
      companyId:"",
      designationIds:"",
      country:"",
      address:"",
      phoneNumber:"",
      email:"",
      birthDate:"",
      items: [],
    };
  }


  routeChange_editprofile = () => {
    let path = "EditProfile";
    this.props.history.push(path);
  };
  routeChange_changepassword = () => {
    let path = "changePassword";
    this.props.history.push(path);
  };
 
  render() {
    var object = JSON.parse(localStorage.getItem('userobject'))
    console.log(object.employeeaddressesData.address)

    const {firstName,lastName,companyId,designationIds,country,address,phoneNumber,email,birthDate} = this.state
    return (
      <>
        
        <div class="profileslinks">
          <head>
            <meta charset="utf-8" />
            <meta
              content="width=device-width, initial-scale=1.0"
              name="viewport"
            />

            <title>Users</title>
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
          </head>
        </div>

        <body>
        
<Header></Header>
<Sidebar></Sidebar>
          <main  id="main" class="main">
          <div class="pagetitle">
              <h1>Profile</h1>
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">Users</li>
                  <li class="breadcrumb-item active">Profile</li>
                </ol>
              </nav>
            </div>
            <section class = "section profile">

            <div class="row">
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                      <img
                        src="assets/img/profile-img.jpg"
                        alt="Profile"
                        class="rounded-circle"
                      />
                      <h2>{object.firstName} {object.lastName}</h2>
                      <h3>Web Designer</h3>
                      <div class="social-links mt-2">
                        <a href="#" class="twitter">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" class="facebook">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="instagram">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" class="linkedin">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
                {/* row end */}


                <div class="col-xl-8">
                  <div class="card">
                    <div class="card-body pt-3">
                      <ul class="nav nav-tabs nav-tabs-bordered">
                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-overview"
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

                        {/* <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            onClick={this.routeChange_setting}
                            data-bs-target="#profile-settings"
                          > 
                            Settings
                          </button>
                        </li> */}

                        <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            onClick={this.routeChange_changepassword}
                            
                          >
                            Change Password
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content pt-2">
                        <div
                          class="tab-pane fade show active profile-overview"
                          id="profile-overview"
                        >
                          <h5 class="card-title">About</h5>
                          <p class="small fst-italic">
                            Sunt est soluta temporibus accusantium neque nam
                            maiores cumque temporibus. Tempora libero non est
                            unde veniam est qui dolor. Ut sunt iure rerum quae
                            quisquam autem eveniet perspiciatis odit. Fuga sequi
                            sed ea saepe at unde.
                          </p>

                          <h5 class="card-title">Profile Details</h5>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label ">
                              First Name
                            </div>
                            <div class="col-lg-9 col-md-8">{object.firstName} </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-3 col-md-4 label ">
                              Last Name
                            </div>
                            <div class="col-lg-9 col-md-8">{object.lastName}</div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Company</div>
                            <div class="col-lg-9 col-md-8">
                            {object.employeedetails.companyId}
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Designation</div>
                            <div class="col-lg-9 col-md-8">{object.employeedetails.designationIds}</div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Country</div>
                            <div class="col-lg-9 col-md-8">{object.employeeaddressesData.country}</div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Address</div>
                            <div class="col-lg-9 col-md-8">
                             {object.employeeaddressesData.address}
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Phone</div>
                            <div class="col-lg-9 col-md-8">
                              {object.employeedetails.phoneNumber}
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">Email</div>
                            <div class="col-lg-9 col-md-8">
                              {object.email}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-3 col-md-4 label">birthDate</div>
                            <div class="col-lg-9 col-md-8">
                              {object.employeedetails.birthDate}
                            </div>
                          </div>

 <div class="tab-pane fade profile-edit pt-3" id="profile-edit" >
  <form>
  <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="assets/img/profile-img.jpg" alt="Profile"/>
                        <div class="pt-2">
                          
                          <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                          <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                        </div>
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


                </div> 
            </section>

          </main>


        <Footer></Footer>

        
        </body>
      </>
    );
  }
}

export default Profilepage;
