var navBar = document.querySelector(".navlost");

window.onscroll = function() {
    if (this.scrollY >= 350) {
        navBar.classList.add("show");


    } else {
        navBar.classList.remove("show");

    }

}



// document.addEventListener("DOMContentLoaded", function () {
//     const mapElement = document.getElementById("map");
//     const lat = parseFloat(mapElement.getAttribute("data-lat"));
//     const lng = parseFloat(mapElement.getAttribute("data-long"));

//     const map = new google.maps.Map(mapElement, {
//         center: { lat: lat, lng: lng },
//         zoom: 14
//     });
// });