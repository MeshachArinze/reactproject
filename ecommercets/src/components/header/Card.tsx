/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { CartItems } from "./cart-items"
import { useSelector } from "react-redux"
import { RootState } from "../../store"



export const Card = () => {
  const [cardOpen, setCardOpen] = useState<boolean>(false);
  const closeCard = () => {
    setCardOpen(false);
  };

  const quantity = useSelector<RootState, number>(
    (state) => state.cart.totalQuantity
  );
  const cartItems = useSelector<RootState, object[]>((state) => state.cart.itemList);

  //total
  let total= 0;
 
  const itemsLists = useSelector<RootState, Array<{totalPrice: number}>>((state) => state.cart.itemList);
  itemsLists.forEach((item) => {
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
        {cartItems.map((item: any) => (
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
