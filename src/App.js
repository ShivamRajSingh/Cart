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
                img : ''
            },
            {
                price : 99,
                title : 'Wrist Watch',
                qty : 1,
                id : 2,
                img : ''
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 1,
                id : 3,
                img : ''
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
      </div>
    );
  }
  
}

export default App;
