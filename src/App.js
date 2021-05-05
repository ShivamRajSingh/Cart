import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
 
class App extends React.Component {
constructor(){
    super();
    this.state = {
        products : [
            {
                price : 999,
                title : 'Mobile Phone',
                qty : 1,
                id : 1,
                img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
                price : 99,
                title : 'Wrist Watch',
                qty : 1,
                id : 2,
                img : 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 1,
                id : 3,
                img : 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
            }
        ]
    }
}
handleIncreaseQuantity = (product) =>{
    // console.log("please increase quantity");
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products : products
    })

}
handleDecreaseQuantity = (product) =>{
    // console.log("please increase quantity");
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
        return;

    products[index].qty -= 1;

    this.setState({
        products : products
    })
}
handleDeleteQuantity = (id) =>{
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
itemCount = (product)=>{
  const {products} = this.state;

  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal = 0;

  products.map((product) =>{
    cartTotal += product.qty * product.price
  })

  return cartTotal;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.itemCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteQuantity}
        />
        <div style= {{ padding : 10 , fontSize : 20}}>TOTAL : $ {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
