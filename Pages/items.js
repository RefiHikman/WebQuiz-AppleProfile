let popup = document.querySelector(".popup");
let overlay = document.querySelector("#overlay");
let mobileNav = document.querySelector(".mobile-nav-links");
let buyBtns = Array.from(document.getElementsByClassName("buy-btn"));

/* Popup Data */
let popupImg = document.querySelector(".popup-img");
let popupItemName = document.querySelector(".popup-item-name");
let popupPrice = document.querySelector(".popup-price");
let popupP1 = document.querySelector(".popup-p1");
let popupP2 = document.querySelector(".popup-p2");
let popupP3 = document.querySelector(".popup-p3");
let popupP4 = document.querySelector(".popup-p4");

buyBtns.map((buyBtn) => {
    buyBtn.addEventListener("click", (e) => {
        popup.classList.add("show");
        overlay.classList.add("active");

        for (let i = 0; i < buyBtns.length; i++) {
            switch (e.target) {
                case buyBtns[i]:
                    popupImg.src = itemData[i].img;
                    popupItemName.innerHTML = itemData[i].itemName;
                    popupPrice.innerHTML = itemData[i].price;
                    popupP1.innerHTML = itemData[i].p1;
                    popupP2.innerHTML = itemData[i].p2;
                    popupP3.innerHTML = itemData[i].p3;
                    popupP4.innerHTML = itemData[i].p4;
                    break;
                default:
            }
        }
    });
});

function buyClose() {
    popup.classList.remove("show");
    overlay.classList.remove("active");
}

function mobileNavShow() {
    mobileNav.classList.toggle("nav-btn-active");
}
