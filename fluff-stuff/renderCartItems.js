let currentItems = JSON.parse(localStorage.items);
let subtotal = 0;
document.getElementById("title-item-count").innerHTML = localStorage.itemCount;

for (let key in currentItems) {
    let product = currentItems[key];
    subtotal += parseInt(product.price);
    document.getElementById("shopping-cart-items").innerHTML += `
    <div class="shopping-cart-item-detail">
    <div class="u-flex-row">
        <div class="item-detail-image">
            <img class="item-detail-image" src="
            `
    + product.imgUrl +

            `" alt="cart-item-pic"/>
        </div>

        <div class="item-detail-info">
            <h2 class="item-detail-name"> 
            `
    + product.name +
            `</h2>
            <div>
                <p class="info-label"><strong>Color:</strong>
                `
    + product.color +
                `</p>
                <p class="info-label"><strong>Filling:</strong> `
    + product.filling +
                `</p>
            </div>
            <div class="item-links">
                <a href="#">update</a>
                <a onclick="remove(
                    `
    + key.toString() +
                    `
                )" href="#">remove</a>
            </div>
        </div>
    </div>
       

    <div class="item-detail-quantprice">
        <div class="">
            <p class="info-label"><strong>Quantity:</strong></p>
            <div  class="info-quantity-box">
                <button class="quant-btn">-</button>
                <p class="quant-num">
                `
    + product.quantity +
                `</p>
                <button class="quant-btn">+</button>
            </div>
        </div>
        <div class="total-price">
            <div class="info-label"><strong>Total Price: </strong></div>
            <div class="total-price-num quant-num"> $
            `
    + product.price +
            `</div>
        </div>
    </div>

</div>
`;
}

document.querySelector(".subtotal-price").innerHTML = "$" + subtotal.toString();



//remove the unwanted item
function remove(index) {
    let currentItems = JSON.parse(localStorage.items),
        currentCount= parseInt(localStorage.itemCount);
    delete currentItems[index];
    localStorage.setItem("items", JSON.stringify(currentItems));
    localStorage.setItem("itemCount", currentCount - 1);
    location.reload();
}