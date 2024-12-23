import React from "react";
import { useCartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const handleBuy = (item) => {
    Swal.fire({
      title: "Good job!",
      text: `You have successfully purchased: ${item.title} for $${
        item.price * item.quantity
      }`,
      icon: "success",
    }).then(() => {
      removeFromCart(item.id);
    });
  };

  return (
    <div className="container mt-5 pt-5">
      <h3 className="display-4 fw-bold text-center mb-5">Your Cart</h3>
      {cart.length === 0 ? (
        <p className="text-center my-5 py-5">Your cart is empty!</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card p-3 h-100">
                <img
                  src={item.imgSrc}
                  className="w-100 mb-3 rounded"
                  alt={item.title}
                />
                <h5 className="text-primary">{item.title}</h5>
                <p>Price: ${item.price}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="btn btn-secondary"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleBuy(item)}
                  className="btn btn-warning mt-3"
                >
                  Buy
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
