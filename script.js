var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function currentDiv(n) {
    showDivs((slideIndex = n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

function autoChangeSlides() {
    plusDivs(1);
}
setInterval(autoChangeSlides, 10000);

// Initialise SlickJS Carousels
$(document).ready(function () {
    $(".top-picks-container").slick({
        infinite: true, // infinite scrolling
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 1, // scroll amount
        autoplay: false, // disable auto scrolling
        adaptiveHeight: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $(".scroll-btn.left"),
        nextArrow: $(".scroll-btn.right"),
        draggable: false,
    });
});

var wordOnTheStreetIndex = 1;

function scrollWordOnTheStreet(direction) {
    var image = document.getElementById("wordOnTheStreetImage");
    var subHeader = document.getElementById("wordOnTheStreetSubHeader");
    var text = document.getElementById("wordOnTheStreetText");

    // Array of image URLs, sub-headers, and text
    var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    var subHeaders = [
        "Word on the street item 1",
        "Word on the street item 2",
        "Word on the street item 3",
    ];
    var texts = [
        "Description of the item 1",
        "Description of the item 2",
        "Description of the item 3",
    ];

    if (direction === "left") {
        wordOnTheStreetIndex--;
    } else if (direction === "right") {
        wordOnTheStreetIndex++;
    }

    // Wrap around if index goes out of bounds
    if (wordOnTheStreetIndex < 0) {
        wordOnTheStreetIndex = images.length - 1;
    } else if (wordOnTheStreetIndex >= images.length) {
        wordOnTheStreetIndex = 0;
    }

    // Update image, sub-header, and text
    image.src = images[wordOnTheStreetIndex];
    subHeader.innerText = subHeaders[wordOnTheStreetIndex];
    text.innerText = texts[wordOnTheStreetIndex];
}

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
