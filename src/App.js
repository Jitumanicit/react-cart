import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          products: [],
          loading: true
      }
      this.db = firebase.firestore();
  }

  // read the data from 
  componentDidMount(){
    this.db
      .collection('products')
      // .where('price', '>', 999)
      .orderBy('price')
      .onSnapshot((snapshot) => {
        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading : false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      // products[index].qty +=1;
      // this.setState({
      //     products: products
      // })
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty : products[index].qty + 1
        })
        .then(() => {
          console.log("Successfully Updated")
        })
        .catch((error) => {
          console.log(error);
        })
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      if(products[index].qty === 1){
          return;
      }
      // products[index].qty -=1;
      // this.setState({
      //     products: products
      // })
      docRef
        .update({
          qty : products[index].qty - 1
        })
        .then(() => {
          console.log("Successfully Updated")
        })
        .catch((error) => {
          console.log(error);
        })
  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;
      // const items = products.filter((item) => item.id !== id);
      // this.setState({
      //     products: items
      // })
      const docRef = this.db.collection('products').doc(id);
      docRef
        .delete()
        .then(() => {
          console.log("Delete Successfully")
        })
        .catch((error) => {
          console.log(error);
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
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    })
    return cartTotal;
  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: 'yfyfyfyft',
        price: 900,
        qty: 3,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct}>Add a Product</button>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;



// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
