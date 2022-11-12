import createFlowerCart from "./cartUI";

export default function cart() {
  const cartRoot = document.getElementById("mainCart");
  console.log(cartRoot);
  const data = JSON.parse(localStorage.getItem("product"));
  console.log("h111");
  data.forEach((flower) => createFlowerCart(cartRoot, flower));
}
