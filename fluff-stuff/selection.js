var boxes = document.getElementsByClassName("pd-selection-content");
var titles = document.getElementsByClassName("pd-selection-title");
var currentProductPrice = parseInt(document.querySelector(".pd-title-price").innerHTML.slice(1));

for (let i = 0; i < titles.length; i++) {
    let title = titles[i];  
    title.addEventListener("click", function(){   
        let current = boxes[i];
        if (current.style.display === "flex") {
            current.style.display = "none";
            title.querySelector(".pds-title-icon").style.transform = "rotate(0)";
        } else {
            current.style.display = "flex";
            title.querySelector(".pds-title-icon").style.transform = "rotate(180deg)";
        }
    });
}

var quantity = document.querySelector(".quant-num"),
    priceDisplay = document.getElementById("price")


function add() {
    let count = parseInt(quantity.innerHTML),
        price = parseInt(priceDisplay.innerHTML);
    quantity.innerHTML = count + 1;
    priceDisplay.innerHTML = price + currentProductPrice;

}

function minus() {
    let count = parseInt(quantity.innerHTML),
        price = parseInt(priceDisplay.innerHTML);
    if (count > 0) {
        quantity.innerHTML = count - 1;
        priceDisplay.innerHTML = price - currentProductPrice;
    }
}


var contents = document.getElementsByClassName("pd-selection-content");

for (let content of contents) {
    let options = content.getElementsByClassName("pd-selection-option");
    for (let option of options) {
        option.addEventListener("click", function() {
            selectionToggle(this, options, content);
        });
    }
}

function selectionToggle(selected, options, category) {
    for (let option of options) {
        option.classList.remove("active");
    }
    selected.classList.add("active");

    let colorDisplay = document.getElementById("selected-color"),
        fillingDisplay = document.getElementById("selected-filling"),
        newSelection = selected.querySelector(".pds-option-name").innerHTML;

    if (category.classList.contains("color-selection")) {
        colorDisplay.innerHTML = newSelection;
    } else if (category.classList.contains("filling-selection")) {
        fillingDisplay.innerHTML = newSelection;
    }
}