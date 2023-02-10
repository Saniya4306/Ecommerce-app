// to add item in cart

export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
// For delete item from cart
export const removeItem=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}

export const emptyCart=(product)=>{
    return{
        type:"EMPTYCART",
        payload:product
    }
}