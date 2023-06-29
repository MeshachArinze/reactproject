import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Item } from "./cart-item";

export const CartItems = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
}: Item) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        quantity: 0,
        cover: "",
      })
    );
  };
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="cardList">
        <div className="cartContent"  key={id}>
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">1{quantity}</button>
                <button className="minus" onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
