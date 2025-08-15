import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const allMenu = [
    { stage: "shop", stageLabel: "Shop", link: "/" },
    { stage: "mens", stageLabel: "Men", link: "/mens" },
    { stage: "womens", stageLabel: "Women", link: "/womens" },
    { stage: "kids", stageLabel: "Kids", link: "/kids" },
  ];

  const getMenu = (key, stage, stageLabel, link) => {
    return (
      <li
        key={key}
        onClick={() => {
          setMenu(stage);
        }}
      >
        <Link to={link} className="nav-link">
          {stageLabel}
        </Link>
        {menu === stage ? <hr /> : <></>}
      </li>
    );
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {allMenu.map((item, idx) => {
          return getMenu(idx, item.stage, item.stageLabel, item.link);
        })}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
