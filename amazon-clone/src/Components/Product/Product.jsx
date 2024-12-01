import React from "react";
import classes from "./Product.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);
  return (
    <div className={classes.products_container}>
      {product.map((singleProduct, i) => (
        <ProductCard key={i} product={singleProduct} />
      ))}
    </div>
  );
}
export default Product;
