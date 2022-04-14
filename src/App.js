import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          products: [
              {
                  price: 99,
                  title: 'Watch',
                  qty: 1,
                  img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912536.png?token=exp=1649928688~hmac=43276b29b4f1454782d76835671c085e',
                  id: 1
              },
              {
                  price: 999,
                  title: 'Mobile Phone',
                  qty: 10,
                  img: 'https://cdn-icons.flaticon.com/png/512/2586/premium/2586488.png?token=exp=1649928091~hmac=2331e3847f74db75e0b04029131e39d9',
                  id: 2
              },
              {
                  price: 999,
                  title: 'Laptop',
                  qty: 4,
                  img: 'https://cdn-icons-png.flaticon.com/512/610/610021.png',
                  id: 3
              }
          ]
      }
  }
  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty +=1;
      this.setState({
          products: products
      })
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 1){
          return;
      }
      products[index].qty -=1;
      this.setState({
          products: products
      })
  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);
      this.setState({
          products: items
      })
  }
  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  } 
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
