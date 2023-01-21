import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const percentNumber = document.querySelector(".loading__counter--number");

let counter = 0;

const interval = setInterval(() => {
  bar.style.width = counter + "%";
  percentNumber.textContent = counter + "%";
  counter++;
  if (counter === 101) {
    clearInterval(interval);
    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text , .loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });
    gsap.to(".loading__box", {
      delay: 2,
      duration: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      backgroundColor: "transparent",
      opacity: 0.5,
      zIndex: 0,
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      opacity: 0.5,
      rotate: "360deg",
    });
  }
}, 30);
