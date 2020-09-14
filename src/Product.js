import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Product({ id, title, image, price, rating }) {
  // const [product, setProducts] = useState([]);
  // useEffect(() => {
  //   // get snapshop/real time post from db
  //   db.collection("products")
  //     // .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       // db return docs/array, map/go through, get id and data
  //       setProducts(
  //         snapshot.docs.map((product) => ({
  //           id: product.id,
  //           data: product.data(),
  //         }))
  //       );
  //     });
  //   setProducts([]);
  // }, []);
  // console.log(product);

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // id={product.id}
  //         title={product.title}
  //         image={product.image}
  //         price={product.price}
  //         rating={product.rating}

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* go through rating/number, fill with nothing according 
          to number and then map that fill with ⭐*/}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
