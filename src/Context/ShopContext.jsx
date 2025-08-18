import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let idx = 0; idx < all_product.length + 1; idx++) {
    cart[idx] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find((product) => {
          if (product.id === Number(item)) {
            return product;
          }
          return null;
        });
        total += itemInfo.new_price * cartItem[item];
      }
    }
    return total;
  };

  const getTotalCartItem = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item];
      }
    }
    return total;
  };

  const contextValue = {
    getTotalCartItem,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
