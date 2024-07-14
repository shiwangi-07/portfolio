const locomotiveScroll = new LocomotiveScroll();
gsap.registerPlugin(ScrollTrigger);

const startLoader = () => {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;
  function updateCounter() {
    if (currentValue === 100) {
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.textContent = currentValue + "%";
    let delay = Math.floor(Math.random() * 200) + 5;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
};
const cursor = () => {
  const cursorDot = document.querySelector(".cursor-dot");
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
};
const pageRevealAnimation = () => {
  const pageRevealTimeline = gsap.timeline();
  SplitType.create(".heading-text h1");
  pageRevealTimeline
    .to("#preloader p, #preloader h2", {
      y: -300,
      opacity: 0,
      duration: 1.6,
      delay: 3,
      ease: "expo.out",
    })
    .to(
      ".layers",
      {
        height: 0,
        display: "none",
        duration: 1.7,
        ease: "expo.out",
        stagger: 0.1,
      },
      ">-1.4"
    )
    .to(
      ".heading-text h1 .char",
      {
        y: "0",
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.04,
      },
      ">-1.3"
    )
    .from(
      ".home-circle",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.3)",
      },
      ">-1"
    )
    .from(
      "header",
      {
        y: "70%",
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
      },
      ">-.8"
    )
    .from(
      "#hero-text h5",
      {
        y: "20%",
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
      },
      ">-1"
    );
};
function scrollToAnimations() {
  const homeButton = document.getElementsByClassName("scrollTo-home");
  const aboutButton = document.getElementsByClassName("scrollTo-about");
  const skillButton = document.getElementsByClassName("scrollTo-skill");
  const projectButton = document.getElementsByClassName("scrollTo-projects");
  const contactButton = document.getElementsByClassName("scrollTo-contact");
  const $homePage = document.getElementById("home-page");
  const $aboutPage = document.getElementById("about-page");
  const $skillPage = document.getElementById("skill-page");
  const $projectPage = document.getElementById("project-page");
  const $contactPage = document.getElementById("transparent-page");

  function scrollTo(params) {
    const { target, options } = params;
    locomotiveScroll.scrollTo(target, options);
  }
  homeButton[0].addEventListener("click", function () {
    scrollTo({
      target: $homePage,
      options: {
        easing: function easeOutCirc() {
          return Math.sqrt(1 - Math.pow(x - 1, 2));
        },
      },
    });
  });
  contactButton[0].addEventListener("click", function () {
    scrollTo({
      target: $contactPage,
      options: {
        easing: function easeOutCirc() {
          return Math.sqrt(1 - Math.pow(x - 1, 2));
        },
      },
    });
  });
  for (let index = 0; index < 2; index++) {
    aboutButton[index].addEventListener("click", function () {
      scrollTo({
        target: $aboutPage,
        options: {
          easing: function easeOutCirc() {
            return Math.sqrt(1 - Math.pow(x - 1, 2));
          },
        },
      });
    });
    skillButton[index].addEventListener("click", function () {
      scrollTo({
        target: $skillPage,
        options: {
          easing: function easeOutCirc() {
            return Math.sqrt(1 - Math.pow(x - 1, 2));
          },
        },
      });
    });
    projectButton[index].addEventListener("click", function () {
      scrollTo({
        target: $projectPage,
        options: {
          easing: function easeOutCirc() {
            return Math.sqrt(1 - Math.pow(x - 1, 2));
          },
        },
      });
    });
  }
}
const logoMoveAnimation = () => {
  const logo = document.querySelector("#logo");
  logo.addEventListener("mousemove", (e) => {
    let position = logo.getBoundingClientRect();
    let x = e.pageX - position.left - position.width / 2;
    let y = e.pageY - position.top - position.height / 2;
    logo.style.transform = `translateX(${x * 0.4}px) translateY(${y * 0.4}px)`;
  });
  logo.addEventListener("mouseleave", (e) => {
    logo.style.transform = "translate(0px, 0px)";
  });
};
const aboutPageAnimations = () => {
  const aboutHeading = document.querySelector(".about-heading");
  SplitType.create(".about-heading");
  SplitType.create("#about-content-right p");
  gsap.to(".about-heading .char", {
    delay: 0.3,
    y: 0,
    duration: 0.7,
    ease: "power3.inOut",
    stagger: 0.04,
    scrollTrigger: {
      trigger: "#about-page",
      start: "top 80%",
    },
  });
  gsap.to("#about-content-right p .line .word", {
    delay: 0.5,
    y: 0,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.01,
    scrollTrigger: {
      trigger: "#about-page",
      start: "top 80%",
    },
  });
};
const skillPageAnimation = () => {
  SplitType.create(".skill-heading");
  SplitType.create("#skill-content p");
  gsap.to(".skill-heading .char", {
    delay: 0.3,
    y: 0,
    duration: 0.7,
    ease: "power3.inOut",
    stagger: 0.04,
    scrollTrigger: {
      trigger: "#skill-page",
      start: "top 90%",
    },
  });
  gsap.to("#skill-content p .line .word", {
    delay: 0.1,
    y: 0,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.01,
    scrollTrigger: {
      trigger: "#skill-content p",
      start: "top 97%",
    },
  });
};
const projectPageAnimation = () => {
  SplitType.create(".project-heading");

  gsap.to(".project-heading .char", {
    delay: 0.3,
    y: 0,
    duration: 0.7,
    ease: "power3.inOut",
    stagger: 0.04,
    scrollTrigger: {
      trigger: "#project-page",
      start: "top 90%",
    },
  });
};
const contactPageAnimation = () => {
  SplitType.create("#contact-page h1");

  gsap.to("#contact-page h1 .char", {
    delay: 0.3,
    y: 0,
    duration: 0.7,
    ease: "power3.inOut",
    stagger: 0.08,
    scrollTrigger: {
      trigger: "#project-page",
      start: "bottom 60%",
    },
  });

  gsap.from(".contact-circle", {
    opacity: 0,
    scale: 0,
    ease: "back",
    duration: 1,
    scrollTrigger: {
      trigger: "#project-page",
      start: "bottom 50%",
    },
  });

  gsap.from("footer", {
    delay: 1,
    y: "20%",
    opacity: 0,
    ease: "power1.out",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#project-page",
      start: "bottom 40%",
    },
  });
};

cursor();
startLoader();
pageRevealAnimation();
scrollToAnimations();
logoMoveAnimation();
aboutPageAnimations();
skillPageAnimation();
projectPageAnimation();
contactPageAnimation();