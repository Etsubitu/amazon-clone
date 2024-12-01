import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter/CurrencyFormatter";
import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  const { image, title, id, rating, price, description } = product;
  return (
    <div className={classes.card_container}>
      <a href={`/products/${id}`}>
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* {rating} */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* {count} */}
          <small>{rating?.count}</small>
        </div>
      </div>
      <div>
        {/* {price } */}
        <CurrencyFormatter amount={price} />
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;
