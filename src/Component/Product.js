import * as React from 'react';
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action/Index';



function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch =  useDispatch ();
     
  const addProduct = (product)=>{
    dispatch(addCart(product));
  }

  

  useEffect(() => {
    let mount = true;
    let getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (mount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        mount = false;
      };
    };
    getProducts();
  },[]);

  const Loading = () => {
    return( 
    <>
  
   
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
       open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
    );
  };
  const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-4">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product, i) => {
          return (
            
              <div className="col-md-3 mb-4" key={i} >
                <div className="card h-100 text-center p-4" >
                 <NavLink to={`/Product/${product.id}`}><img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height='200px'
                  />
                  </NavLink>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}....</h5>
                    <p className="card-text lead fw-bold">
                     $ {product.price}
                    </p>
                    <button onClick={()=>addProduct(product)} className="btn btn-outline-dark">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-4 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="display-6 fw-bolder text-center">Latests Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Product;
