import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
                {
                    price : 999,
                    title : 'Mobile Phone',
                    qty : 1,
                    img : ''
                },
                {
                    price : 99,
                    title : 'Wrist Watch',
                    qty : 1,
                    img : ''
                },
                {
                    price : 9999,
                    title : 'Laptop',
                    qty : 1,
                    img : ''
                }
            ]
        }
    }

    render(){
        // const arr = [1,2,3,4,5]
        const {products} = this.state;
        return(
            <div className = "cart">
                {products.map((product) =>{
                    return <CartItem product = {product} />
                })}
                {/* {arr.map((item) =>{
                    return item + 5
                })} */}
            </div>
        )
        
    }
}
export default Cart;