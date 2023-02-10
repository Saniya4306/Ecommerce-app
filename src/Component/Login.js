import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useEffect, useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";

function Login() {
    localStorage.setItem("login", true);
    const navigate = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errorMsg , setErrorMsg] = useState("");

  const onSubmitHandler = (e)=>{
    e.preventDefault();
 }

  const handleSubmission = () => {
    if( !value.email || !value.password){
        setErrorMsg("Required all feilds");
    }else{
        setErrorMsg("")
        signInWithEmailAndPassword(auth,value.email, value.password).then
        ((res)=>{
            console.log(res);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrorMsg("The password and email entered is incorrect");
        })
    }
    console.log(value);
  };
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>
              Login <i className="fa fa-sign-in me-1"></i>
            </h1>
            <h4 className="py-3">Sign into your account</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="Login.jpg"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label fw-bold">
                  Email
                </label>
                <input
                onChange={(e)=>{
                    setValue((prev)=>({...prev ,email: e.target.value}))
                  }}
                  type="email"
                  className="form-control"
                  id="exampleForm"
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
                    setValue((prev)=>({...prev ,password: e.target.value}))
                  }}
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="**********"
                  autoComplete=""
                />
              </div>
              <p className="text-danger-emphasis">{errorMsg}</p>
              <button onClick={handleSubmission } type="submit" className="btn btn-outline-dark mb-4 w-25">
                Login
              </button>
              <br></br>
              <NavLink to='' className="py-0">
                Forget password ?
              </NavLink>
              <p className="py-2">
                Dont have an account ?{" "}
                <NavLink to="/Register">Register here</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
