import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 9999,
            title: 'Redmi 5',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // if previous state is required then used this
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        })
    }
    decreaseQuantity = ()=> {
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        })
    }
    render(){
        const {title, price, qty, img} = this.state;
        return(
            <div className ="cart-item">
                <div className = "left-block">
                    <img style={styles.image} />
                </div>
                <div className = "right-block">
                    <div style={{color:'red'}}>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty : {qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
                        <img alt="decrease" onClick={this.decreaseQuantity} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1649605794~hmac=eb374de2eb04e0d7ea8fd61261191be6" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;
