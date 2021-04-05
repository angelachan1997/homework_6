var itemCountDisplay = document.getElementById("item-count");
console.log(localStorage.itemCount);

if (localStorage.itemCount === undefined) {
    localStorage.setItem("itemCount", 0);
    itemCountDisplay.innerHTML = 0;
   
} else {
    itemCountDisplay.innerHTML = localStorage.itemCount;
}

function addToCart() {
    let count = parseInt(itemCountDisplay.innerHTML);
    itemCountDisplay.innerHTML = count + 1;
    localStorage.setItem("itemCount", count + 1);
}