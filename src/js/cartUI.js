export default function createFlowerCart(parent, flower) {
  parent.innerHTML += `
        <div class="cart">
            <div class="imgAndTitle">
                <div class="infoDiv">
                    <h1 class="titleH1">${flower.title}</h1>
                </div>
                <div class="imgDiv">
                    <img
                    src= ${flower.img}
                    alt=${flower.title}
                   
                    class="cartOneImg"
                    />
                </div>
            </div>
            <div class="priceDiv">
                <h1 class="priceH1">PRICE</h1>
                <h1 class="" priceH1>${flower.price}</h1>
            </div>
            <div class="buttonDiv">
                <div class="heightBtn">
                    <label for="cars">Choose height</label>
                    <select name="height" id="height">
                        ${flower.height.map(
                          (heighta) =>
                            ` <option value=${heighta}>${heighta}</option>`
                        )}
                        
                    </select>
                </div>
            </div>
            <div class="quantBtn">
                <h1 class="quantH1">quantity</h1>
                <div class="incrDec">
                    <button class="incrBtn">+</button>
                    <p class="quantP">${flower.quantity}</p>
                    <button class="decrBtn">-</button>
                </div>
            </div>
            <div class="totalDiv">
                <h1 class="totalH1">TOTAL</h1>
                <h3 class="totalPriceH3">300$</h3>
            </div>
        </div>
`;
}
