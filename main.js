// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//img slider start
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {

    button.addEventListener("click", () => {
            const way = button.getAttribute("data-carousel-button");
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        //active slide
        const activeslide = slides.querySelector("[data-active]");
        let activeIndex = [...slides.children].indexOf(activeslide);

        //als de way variable gelijk is aan prev doe dan -1
        let newindex = activeIndex + 1;
        if(way === 'prev')
        {
            newindex = activeIndex - 1
        }

        //begin slider bepalen en als die bij de laatste is begint hij weer bij 0
        if (newindex >= slides.children.length) newindex = 0;
        if (newindex < 0) newindex = (slides.children.length - 1);

        //de active slide
        slides.children[newindex].dataset.active = true;
        delete activeslide.dataset.active;
    });
});
//img slider end