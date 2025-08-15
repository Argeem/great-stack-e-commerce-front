import "./Popular.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOWEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              product_image={item.product_image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
