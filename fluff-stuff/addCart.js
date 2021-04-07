var itemCountDisplay = document.getElementById("item-count");
var items = [];

if (localStorage.itemCount === undefined || localStorage.items === undefined) {
    localStorage.setItem("itemCount", 0);
    localStorage.setItem("items", JSON.stringify(items));
    itemCountDisplay.innerHTML = 0;
} else {
    itemCountDisplay.innerHTML = localStorage.itemCount;
}

function addToCart() {
    let newProduct = {
        imgUrl: document.querySelector(".pd-main-img").src,
        name : document.querySelector(".pd-title-name").innerHTML,
        color: document.getElementById("selected-color").innerHTML,
        filling: document.getElementById("selected-filling").innerHTML,
        quantity: document.querySelector(".quant-num").innerHTML,
        price: document.getElementById("price").innerHTML
    };

    if (localStorage.itemCount == 0) {
        let newItems = {};
        newItems[0] = newProduct;
        localStorage.setItem("items", JSON.stringify(newItems));
    } else {
        let currentItems = JSON.parse(localStorage.items);
        currentItems[localStorage.itemCount] = newProduct;
        localStorage.setItem("items", JSON.stringify(currentItems));
    }
    let count = parseInt(itemCountDisplay.innerHTML);
    itemCountDisplay.innerHTML = count + 1;
    localStorage.setItem("itemCount", count + 1);

    window.location.href = "cart.html";
    
}


/*

localStorage.items = [{
    imgUrl: "",
    name: "",
    color: "",
    filling: "",
    quantity: "",
    price: ""
}]

*/