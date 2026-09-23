import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image: "/images/aloe-vera.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image: "/images/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "/images/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 12,
    image: "/images/money-plant.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
            />

            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
