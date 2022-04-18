import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Profile_Edit extends Component {
  
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

  routeChange_overview = () => {
    let path = "pages-profile";
    this.props.history.push(path);
  };
  routeChange_changepassword = () => {
    let path = "changePassword";
    this.props.history.push(path);
  };

  apicall = (e) => {
    e.preventDefault();

    // alert(this.state.firstName);

    const apiUrl = "http://localhost:5000/admin/edit_profile";
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
        // console.log(res);
        // console.log(res.firstName);

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


  render() {
    var object = JSON.parse(localStorage.getItem('userobject'))
    // console.log(object)

    const {firstName,lastName,companyId,designationIds,country,address,phoneNumber,email,birthDate} = this.state
    return (
      <>
        <div>profile pages</div>
        <div className="profileslinks">
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />

          <title>Users</title>
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
                          className="nav-link"
                          data-bs-toggle="tab"
                          onClick={this.routeChange_overview}
                          data-bs-target="#profile-overview"
                        >
                          Overview
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-edit"
                        >
                          Edit Profile
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          onClick={this.routeChange_changepassword}
                        >
                          Change Password
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-2">
                      <div
                        className="tab-pane fade show active profile-overview"
                        id="profile-overview"
                      >
                        {/* end of th tab line */}

                        {/* <div className="tab-pane fade profile-edit pt-3" id="profile-edit" > */}
                        <form>
                          {/* <div className="row mb-3">
                            <label
                              for="profileImage"
                              className="col-md-4 col-lg-3 col-form-label"
                            >
                              Profile Image
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <img
                                src="assets/img/profile-img.jpg"
                                alt="Profile"
                              />
                              <div className="pt-2">
                                <a
                                  href="#"
                                  className="btn btn-primary btn-sm"
                                  title="Upload new profile image"
                                >
                                  <i className="bi bi-upload"></i>
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-danger btn-sm"
                                  title="Remove my profile image"
                                >
                                  <i className="bi bi-trash"></i>
                                </a>
                              </div>

                            </div>
                          </div> */}

                          
                            <div className="row mb-3">  
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label" >First Name</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="firstName" type="text" className="form-control" id="firstName" defaultValue={object.firstName}></input>
                          </div>
                        </div>
                        <div className="row mb-3">  
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label" >Last Name</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="lastName" type="text" className="form-control" id="lastName" defaultValue={object.lastName}></input>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" id="company" defaultValue={object.employeedetails.companyId}/>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="Job" className="col-md-4 col-lg-3 col-form-label">Desgination</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="job" type="text" className="form-control" id="Designation" defaultValue={object.employeedetails.designationIds}/>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="country" type="text" className="form-control" id="Country" defaultValue={object.employeeaddressesData.country}/>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="address" type="text" className="form-control" id="Address" defaultValue={object.employeeaddressesData.address}/>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="phone" type="text" className="form-control" id="Phone" defaultValue= {object.employeedetails.phoneNumber}/>
                          </div>
                        </div>
    
                        <div className="row mb-3">
                          <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="email" type="email" className="form-control" id="Email" defaultValue={object.email}/>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="birthday" type="birthday" className="form-control" id="birthday" defaultValue= {object.employeedetails.birthDate}/>
                          </div>
                        </div>
                      
    
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Save Changes</button>
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

            {/* </div>  */}
          </section>
        </main>

        <Footer></Footer>
      </>
    );
  }
}

export default Profile_Edit;
