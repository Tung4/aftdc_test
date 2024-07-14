import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="mb-2 mt-n2 display-5 text-uppercase">
                <span className="text-primary">News</span>Room
              </h1>
            </a>
            <p>
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Categories</h4>
            <div className="d-flex flex-wrap m-n1">
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Politics
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Business
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Corporate
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Sports
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Health
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Education
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Science
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Technology
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Foods
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Entertainment
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Travel
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Lifestyle
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Tags</h4>
            <div className="d-flex flex-wrap m-n1">
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Politics
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Business
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Corporate
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Sports
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Health
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Education
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Science
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Technology
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Foods
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Entertainment
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Travel
              </a>
              <a href className="btn btn-sm btn-outline-secondary m-1">
                Lifestyle
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                About
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Advertise
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Privacy &amp; policy
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Terms &amp; conditions
              </a>
              <a className="text-secondary" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center">
          ©{" "}
          <a className="font-weight-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed by{" "}
          <a className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
