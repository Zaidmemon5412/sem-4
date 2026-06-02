import { useEffect, useState } from "react";
import Filter from "../../shared/component/Filter";

function Product() {
  const [Products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const filteredProducts =
    category === "all"
      ? Products
      : Products.filter((p) => p.category == category);
  return (
    <>
      <Filter setCategory={setCategory} />
      
      <div className="Filters"></div>
      <div className="products-container">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt="This is img" className="card-img" />
            <h2 className="card-title">{p.title}</h2>
            <p className="card-category">{p.category}</p>
            <h3 className="card-price">₹ {p.price}</h3>
            <button className="card-btn">Add To Cart</button>
          </div>
        ))}
      </div>
      <h2>I am last </h2>
    </>
  );
}

export default Product;
