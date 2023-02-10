import React from "react";
import { useSelector,useDispatch} from "react-redux";
import {useState} from 'react';
import { emptyCart } from "../redux/action/Index";
import { NavLink } from "react-router-dom";


function CheckOut() {
  const [value, setValue] = useState({
   firstname: "",
    lastname: "",
    email: "",

  });
  // username : "",
  // email : "",
  // address : "",
  // address2 : "",
  // zip:"",
  // cvv:"",
  // exp:"",
  // cardNum:"",
  // // namecard:"",
  // || !value.username ||!value.address ||!value.address2
  // ||!value.cardNum ||!value.email ||!value.exp ||!value.namecard || !value.zip || !value.cvv
 
  const state = useSelector((state) => state.HandleCart);
  const dispatch = useDispatch();

   const closeCart = (item)=>{
        dispatch(emptyCart(item))
   }

   const onSubmitHandler = (e)=>{
    e.preventDefault();
 }
  
 
   var total = 0;
  const productList = (list)=>{
    total = total + list.price;
    return(
        <li className="list-group-item d-flex justify-content-between 1h-sm" key={list.id}>
        <div className="">
        <h6 className="my-0">{list.title}</h6>
        <small className="text-muted">{list.description.substring(0,12)}</small>
        </div>
        <span className="text-muted">$ {list.price}</span>
        </li>
    )
  }
  return (
    <div className="container my-5 ">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-dark">Your cart</span>
            <span className="badge bg-dark rounded-pill">{state.length}</span>
          </h4>
          <ul className="list-group mb-3">
           {state.map(productList)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>

          <form className="card p-2" onSubmit={onSubmitHandler}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" onSubmit={onSubmitHandler} >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,firstname:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value={value.lastname}
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,lastname:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                    onChange={(e)=>{
                      setValue((prev)=>({...prev,username:e.target.value}))
                    }}
                  />
                  <div className="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email 
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,email:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,adresss:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,address2:e.target.value}))
                  }}
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                 onChange={(e)=>{
                  setValue((prev)=>({...prev,zip:e.target.value}))
                }}
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input  type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                
                  required=""
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                  
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                 
                
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,namecard:e.target.value}))
                  }}
                />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,cardNum:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,exp:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,cvv:e.target.value}))
                  }}
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr className="my-4"></hr>
            <NavLink to='/Thankyou'><button  onClick={()=>closeCart()} className="w-100 btn btn-outline-dark btn-lg" type="submit">
              Continue to checkout
            </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
