// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
            const offset = button.dataset.carouselbutton === "next" ? 1 : +1;
            const onset = button.dataset.carouselbutton === "next" ? 1 : -1;
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        const activeslide = slides.querySelector("[data-active]");
        let newindex = [...slides.children].indexOf(activeslide) + offset;
        if (newindex < 0) newindex = slides.children.length - 1;
        if (newindex >= slides.children.length) newindex = 0;

        slides.children[newindex].dataset.active = true;
        delete activeslide.dataset.active;
    });
});
