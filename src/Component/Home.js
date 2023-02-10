import React from "react";
import Product from "./Product"
import './Home.css';

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark border-0">
        <img
          src="pexels-anastasiya-gepp-1462637.jpg"
          className="card-img "
          alt="Background"
          height={"500px"}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="cotainer position-absolute bottom-50 end-0">
            <h5 className="card-title  d-flex display-6 fw-bolder lh-sm">
              NEW SEASON ARRIVALS.
            </h5>
            <p className="card-text lead fs-4">Checkout all the trends.</p>
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
}
export default Home;
