import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import image from "../images/cashew.webp";
import ProductsData from "./ProductsData";
import { ADD } from "../redux/actions/action";

const Cards = () => {
  const [user, setUser] = useState(ProductsData);
  console.log(user);

  // const url = "https://shopee.p.rapidapi.com/shopee.co.id/list-main-categories";

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "7df2a0625bmshf9550f7d85db374p1a99e5jsnf67950608050",
  //     "X-RapidAPI-Host": "shopee.p.rapidapi.com",
  //   },
  // };

  // const fetchData = () => {
  //   fetch(url, options)
      // .then((res) => res.json())
  //     .then((json) => setUser(json.data.categories))
  //     .catch((err) => console.error("error:" + err));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center mt-3">Add to Cart </h2>
      <div className="row d-flex justify-content-center align-items-center">
        {user.map((data, id) => {
          return (
            <>
              <div
                class="card mx-4 mt-4 card_style"
                style={{ width: "22rem", border: "none" }}
              >
                <img
                  class="card-img-top mt-3"
                  src={data.imgdata}
                  alt="Card image cap"
                  style={{ height: "16rem" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{data.rname}</h5>
                  <p class="card-text">Price: ${data.price}</p>
                  <div className="button_div" onClick={() => send(data)}>
                    <div class="btn btn-primary d-flex justify-content-center">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
