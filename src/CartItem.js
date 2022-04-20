import React from "react";

const CartItem = (props) => {
    const {title, price, qty, img} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return(
        <div className ="cart-item">
            <div className = "left-block">
                <img style={styles.image} src={product.img} alt='img-data' />
            </div>
            <div className = "right-block">
                <div style={{color:'red'}}>{title}</div>
                <div>Rs {price}</div>
                <div>Qty : {qty}</div>
                <div className="cart-item-action">
                    <img alt="increase" onClick={()=> onIncreaseQuantity(product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
                    <img alt="decrease" onClick={()=> onDecreaseQuantity(product)} className="action-icons" src="https://freeiconshop.com/wp-content/uploads/edd/minus-flat.png" />
                    <img alt="delete" onClick={()=> onDeleteProduct(product.id)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" />
                </div>
            </div>
        </div>
    );
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
