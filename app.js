const appearOnScroll = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    })
}, options);

appearOnScroll.forEach(entry => {
    observer.observe(entry);
});

//smooth scrolling experience
// const body = document.body,
//     scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//     height = scrollWrap.getBoundingClientRect().height - 1,
//     speed = 0.04;

// let offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     let scroll = `translate3d(0px, ${offset * -1}px, 0)`;
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();