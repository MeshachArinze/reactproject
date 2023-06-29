import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

interface Item {
  id: number;
  cover: string;
  name: string;
  price: number;
}

export const ProductCart = ({ id, cover, name, price }: Item) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        cover,
        quantity: 0,
      })
    );
  };
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link to={""}>
            <img src={cover} alt="cover" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
};
