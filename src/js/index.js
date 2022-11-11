import createCard, { click } from "./productCard";

import request from "../helper/request";
import url from "../helper/api";

const productsDiv = document.getElementById("products");
const cartBtn = document.querySelector(".cart");

request("GET", url).then((data) => {
  data.forEach((data) => createCard(productsDiv, data));
  click(data);
});

cartBtn.addEventListener("click", (e) => {
  window.open("src/html/cart.html", "_blank");
  //   location.href = "src/html/cart.html";
});
