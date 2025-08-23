import "./RelatedProducts.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const RelatedProducts = () => {
  return (
    <div className="related-product">
      <h1>Related Products</h1>
      <hr />
      <div className="related-product-item">
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
