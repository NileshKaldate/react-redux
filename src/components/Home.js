import { responsiveFontSizes } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Nilesh");
  }, []);

  const array = [1, 2, 3, 4, 5];

  function fetchApi() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (response) => response.json().then((json) => console.log(json))
    );
  }

  return (
    <Fragment>
      <div className="container">
        <div className="add-to-cart">
          <img
            src="https://www.j2store.org/images/themeparrot/home_page/shopping-cart.png"
            alt=""
          />
        </div>
        <h1>This is Home Component</h1>
        <div className="card-wrapper">
          <div className="img-wrapper item">
            <img
              src="https://m.media-amazon.com/images/I/61IJBsHm97L._SX679_.jpg"
              alt=""
            />
          </div>
          <div className="text-wrapper item">
            <span>Iphone</span>
            <span>Price : 1000$</span>
          </div>
          <div className="btn-wrapper item">
            <button style={{ cursor: "pointer" }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
