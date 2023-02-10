import React, { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";


function Register() {
    const navigate = useNavigate();
     const [value, setValue] = useState({
    
          name :"",
           email: "",
           password: "",
       });
   const[errorMsg, setErrorMsg] = useState("");
 const onSubmitHandler = (e)=>{
    e.preventDefault();
 }

  const submitHandler = ()=>{
    if(!value.name || !value.email || !value.password){
        setErrorMsg("Required all feilds");
        return;
    }else{
        setErrorMsg("")
        createUserWithEmailAndPassword(auth,value.email, value.password).then
        ((res)=>{
            console.log(res);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrorMsg("your account is already existing")
         
        })
    }
    console.log(value);
  }

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Register</h1>
            <h4>Lets make it happen together</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label fw-bold">
                  Username
                </label>
                <input
                    onChange={(e)=>{
                        setValue((prev)=>({...prev,name:e.target.value}))
                      }}
                  type="text"
                  className="form-control"
                  placeholder="your name"
                  autoComplete=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label fw-bold">
                  Email
                </label>
                <input
                  onChange={(e)=>{
                    setValue((prev)=>({...prev,email:e.target.value}))
                  }}
                  type="email"
                  className="form-control"
                  placeholder="you@gmail.com"
                  autoComplete=""
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Password
                </label>
                <input
                 onChange={(e)=>{
                 setValue((prev)=>({...prev,password:e.target.value}))
                  }}
                  type="password"
                  className="form-control"
                  placeholder="**********"
                  autoComplete=""
                />
              </div>
              <p className="text-danger-emphasis">{errorMsg}</p>
              <button onClick={submitHandler}  className="btn btn-outline-dark mb-4 w-20">
               Register
              </button>
              <br></br>

              <p className="py-2">
                Already have an account ?{" "}
                <NavLink to="/Login">Login here</NavLink>
              </p>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="Register.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
