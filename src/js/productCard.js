export default function createCard(parent, data) {
  parent.innerHTML += `
  <div class="product-one">
  <div class="oneImgDiv">
    <img
      class="oneImg"
      src=${data.img}
      alt=""
    />
  </div>
  <div class="oneInfoDiv">
    <h1 class="oneTitle">${data.title}</h1>
    <p>${data.price}</p>
    <button class="oneBtn">Add to Cart</button>
  </div>
</div>
`;
}
export function click(data) {
  const btnCart = document.querySelectorAll(".oneBtn");
  let prod = [];
  btnCart.forEach((item, i) =>
    item.addEventListener("click", (e) => {
      console.log(prod);
      prod.push(data[i]);
      addToLocal([...new Set(prod)]);
    })
  );
}
function addToLocal(info) {
  localStorage.setItem("product", JSON.stringify(info));
}
