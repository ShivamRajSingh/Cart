import React from 'react';

class CartItem extends React.Component{
    render(){
        const {price , title , qty} = this.props.product;
        const {
            product,
            onDecreaseQuantity, 
            onIncreaseQuantity,
            onDeleteQuantity} = this.props;
        return(
            <div className = "cart-item">
                 <div className = "left-block">    
                 <img style = {styles.image} src = {product.img}/>
                 </div>
                 <div className = "right-block">
                     <div style = { {fontSize : 25} }>{title}</div>
                     <div style = { {color : '#777'} }>${price}</div>
                     <div style = { {color : '#777'} }>Qty:{qty}</div>
                    <div className = "cart-item-actions"> 
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className= "action-icons" 
                            src= "https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                            onClick = {() => onIncreaseQuantity(product)}
                        />

                        <img
                            alt="decrease"
                            className= "action-icons"
                            src= "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619808535~hmac=35803475205066bc886b8636830796b3"
                            onClick = {() => onDecreaseQuantity(product)}
                        />

                        <img
                            alt="delete"
                            className= "action-icons"
                            src= "https://www.flaticon.com/premium-icon/icons/svg/2782/2782872.svg" 
                            onClick = {() => onDeleteQuantity(product.id)}
                        />

                    </div>
                 </div>
            </div>
        )
    }
}

const styles ={
    image:{
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}
export default CartItem;