import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav">Description</div>
        <div className="description-box-nav fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their offerings, and customers can browse, select, and
          purchase items from the comfort of their homes. E-commerce websites
          typically include features such as product catalogs, shopping carts,
          secure payment gateways, and order management systems.
        </p>
        <p>
          These platforms have revolutionized retail by providing convenience,
          accessibility, and a wider selection of products compared to
          traditional brick-and-mortar stores. They enable businesses to reach a
          global customer base, operate 24/7, and streamline their sales
          processes. For consumers, e-commerce offers the flexibility to shop
          anytime, compare prices, read reviews, and have products delivered
          directly to their doorstep.
        </p>
      </div>
    </div>
  );
};
