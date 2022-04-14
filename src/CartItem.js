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
                <img style={styles.image} src={product.img} />
            </div>
            <div className = "right-block">
                <div style={{color:'red'}}>{title}</div>
                <div>Rs {price}</div>
                <div>Qty : {qty}</div>
                <div className="cart-item-action">
                    <img alt="increase" onClick={()=> onIncreaseQuantity(product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
                    <img alt="decrease" onClick={()=> onDecreaseQuantity(product)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1649605794~hmac=eb374de2eb04e0d7ea8fd61261191be6" />
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
