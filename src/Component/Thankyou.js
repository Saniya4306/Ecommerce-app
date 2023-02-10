import React from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function Thankyou(){
    return(
        <Box 
        height={'450px'}
       width={400}
        margin={'auto'}
       borderRadius={5}
       marginBottom={5}
       marginTop={10}
    
       boxShadow={'5px 10px 10px #ccc'}
      >
        <div className="container ">
            <div className="row g-2">
            <div className=" d-flex align-items-center justify-content-center">
                <img src="ordered.png" alt="thankyou" height='200px' width='200px' margin='auto'/>
              
            </div>
            <div className="row">
           
                <div className="col-12 text-center py-2 my-2">
                    <h3>Thank You</h3>
                    <h4>Order Successfully Placed</h4>
                    <p className="my-3"> Your order will be shipped soon.</p>
                    <NavLink to='/'><button type="submit" className="btn btn-outline-dark mb-1 w-20 my-1">Continue Shopping</button></NavLink>
                </div>
            </div>
            </div>
        </div>
        </Box>
    )
}

export default Thankyou;