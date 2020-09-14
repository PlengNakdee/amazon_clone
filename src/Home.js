import React, { useEffect, useState } from "react";
import "./Home.css";
import Slide from "./Slide";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  return (
    <div className="home">
      {/* <Slide /> */}
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-NGVmZmRlNjEt-w3000._CB405404421_.jpg"
        alt="First slide"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Leica D-LUX 7 4K Compact Camera"
          price={(1, 149.95)}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611brw-RQ-L._AC_SL1000_.jpg"
        />
        <Product
          id="49538094"
          title="Marshall Stanmore Multi-Room Wi-Fi and Bluetooth Speaker, Black"
          price={538.65}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81CEnn3FURL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="LEGO Star Wars Ultimate Millennium Falcon 75192 Expert Building Kit and Starship Model (7541 Pieces)"
          price={787.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/A1yF2DxUqEL._AC_SL1500_.jpg"
        />
        <Product
          id="23445930"
          title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Heather Gray"
          price={74.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71uB9tuw2JL._AC_SL1000_.jpg"
        />
        <Product
          id="3254354345"
          title="Sennheiser Momentum True Wireless 2 - Black (M3IETW2 Black)"
          price={270.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81FaX2%2Bwu2L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
