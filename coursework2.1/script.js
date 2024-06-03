let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

function updateVisitCount() {
    var button = document.getElementById("visitButton");
    button.disabled = true;

    var visitCount = localStorage.getItem("visitCount") || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
    alert("Вы посетили этот сайт " + visitCount + " раз(а).");

    button.style.backgroundColor = "rgba(122, 85, 53, 1)";
    button.style.cursor = "not-allowed";

    // Установка флага в localStorage для отключения кнопки в этой сессии
    localStorage.setItem("visitButtonClicked", "true");
}





