import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.product_image} alt="" />
          <img src={product.product_image} alt="" />
          <img src={product.product_image} alt="" />
          <img src={product.product_image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.product_image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-old-price">
            ${product.old_price}
          </div>
          <div className="product-display-right-new-price">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A light weight, usually knitted, pullover shirt, close-fitting and
          with a round neckline and short sleeve, worm as an undershirt or outer
          garment{" "}
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
