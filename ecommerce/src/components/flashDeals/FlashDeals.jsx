import { PropTypes } from "prop-types";
import FlashCard from "./FlashCard";
import "./style.css";
import Data from "../Data";

const FlashDeals = ({ addToCart }) => {
  let data = Data.productItems;
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={data} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

FlashDeals.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default FlashDeals;
