const hamburgerBTN = document.querySelector(".hamburger-btn");
const menuList = document.querySelector(".menu-list");
const registration = document.querySelector(".registration");

hamburgerBTN.addEventListener("click", function () {

    hamburgerBTN.classList.toggle("click");

    if (hamburgerBTN.classList.contains("click")) {

        menuList.style.display = "block";
        registration.style.display = "block";

    } else {

        menuList.style.display = "none";
        registration.style.display = "none";

    }

})