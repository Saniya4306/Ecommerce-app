import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-light pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left ">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold">
                FlexCart{" "}
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
              </h3>
              <p>
                We are a young comapny always looking for new and creative ideas
                to help you with our products in your everyday.Designed and
                built with all the love by Saniya Khan with the help of friends
                and online sources.
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Contact Info
              </h5>
              <p>
                <i className="fa fa-map-marker " aria-hidden="true"></i> xxxx,
                xxx xxx xxx xxx
              </p>
              <p>
                <i className="fa fa-phone " aria-hidden="true"></i>{" "}
                phone:(0039)123456
              </p>

              <p>
                <i className="fa fa-envelope " aria-hidden="true"></i>{" "}
                saniyakhanxxxx@gmail.com
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Poducts</h5>
              <p>
                <NavLink to="" className=" nav-link active">
                  All
                </NavLink>
              </p>
              <p>
                <NavLink to="" className=" nav-link active">
                  Jewellery
                </NavLink>
              </p>
              <p>
                <NavLink to="" className=" nav-link active">
                  Electronics
                </NavLink>
              </p>
              <p>
                <NavLink to="" className=" nav-link active">
                  Men's Collection.
                </NavLink>
              </p>
              <p>
                <NavLink to="" className=" nav-link active">
                  Women's Collection.
                </NavLink>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Technologies & packages
              </h5>
              <p>React</p>
              <p>redux</p>
              <p>Material ui</p>
              <p>bootstrap 5</p>
              <p>Font-awesome</p>
            </div>
          </div>
          <hr className="mb-4"></hr>
          <div className=" row align-items-center justify-content-center">
            <div className="col-md-7 col-lg-8">
              <h5>
                copyright@2022 all right reserved by : FlexCart{" "}
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
              </h5>
              <p>
                <i
                  className="fa fa-facebook-official me-1"
                  aria-hidden="true"
                ></i>
                <i className="fa fa-twitter-square me-1" aria-hidden="true"></i>
                <i
                  className="fa fa-google-plus-official me-1"
                  aria-hidden="true"
                ></i>
                <i className="fa fa-youtube-play me-1" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
