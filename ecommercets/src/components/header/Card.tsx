import React, { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
// import { product } from "../../assets/data/data"
import { CartItems } from "./CartItems"
import { useSelector } from "react-redux"

interface Total {
  totalPrice: number;
}

export const Card: () => React.JSX.Element = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const quantity = useSelector<[]>((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  //total
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item: Total) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item: { id: any; cover: any; name: any; price: any; quantity: any; totalPrice: any }) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        <div className="checkOut">
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor="">${total}</label>
          </button>
        </div>
      </div>
    </>
  );
};
