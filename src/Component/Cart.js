import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeItem , addCart} from '../redux/action/Index';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const state = useSelector((state)=> state.HandleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(removeItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">
                              {cartItem.qty} X ${cartItem.price} 
                              = $ {cartItem.qty * cartItem.price}
                              </p>
                              <button onClick={()=>handleDel(cartItem)} className='btn btn-outline-dark me-4' >
                                <i className='fa fa-minus'></i>
                              </button>
                              <button onClick={()=> handleAdd(cartItem)} className='btn btn-outline-dark '>
                              <i className='fa fa-plus'></i>
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/CheckOut" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart