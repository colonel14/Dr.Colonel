var nav = document.querySelector("nav");
var navLinks = document.querySelectorAll("nav .links li");
var asideLinks = document.querySelectorAll("aside ul li");
var bodySections = document.querySelectorAll("section");
var arrowDown = document.querySelector(".arrow_down");

// Go To corresponding Section when clicking on its button on nav
navLinks.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    navLinks.forEach((ele) => {
      ele.children[0].classList.remove("active");
    });
    e.currentTarget.children[0].classList.add("active");

    const corrSectionPos =
      document.querySelector("." + e.currentTarget.dataset.cont).offsetTop -
      nav.clientHeight;

    window.scrollTo({
      top: corrSectionPos,
      behavior: "smooth",
    });
  });
});
asideLinks.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    asideLinks.forEach((ele) => {
      ele.children[0].classList.remove("active");
    });
    e.currentTarget.children[0].classList.add("active");

    const corrSectionPos =
      document.querySelector("." + e.currentTarget.dataset.cont).offsetTop -
      nav.clientHeight;

    window.scrollTo({
      top: corrSectionPos,
      behavior: "smooth",
    });
  });
});
// scroll to Skills Section on clicking Arrow Down Bottom
arrowDown.addEventListener("click", function () {
  window.scrollTo({
    top: bodySections[1].offsetTop - nav.clientHeight,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  //add Active Class To links in navbar when reaches corresponding section
  var current = "";
  bodySections.forEach((ele) => {
    if (window.scrollY >= ele.offsetTop - nav.clientHeight) {
      current = ele.getAttribute("class");
    }
  });
  navLinks.forEach((ele) => {
    ele.children[0].classList.remove("active");
  });
  asideLinks.forEach((ele) => {
    ele.children[0].classList.remove("active");
  });

  document.getElementById(current).children[0].classList.add("active");

  // Add Scrolled class To Nav When Scroll
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

var works = document.querySelectorAll(
  ".experience .experience_inner .single_work"
);
var skillsIcon = document.querySelectorAll(".skills .single_skill .skill_icon");
var skillsInfo = document.querySelectorAll(
  ".skills .single_skill .skill_info h3"
);

window.addEventListener("scroll", function () {
  works.forEach((work) => {
    if (window.scrollY >= work.offsetTop - work.clientHeight * 2.5) {
      work.classList.add("animated_style");
    } else {
      work.classList.remove("animated_style");
    }
  });
  skillsIcon.forEach((icon) => {
    if (window.scrollY >= icon.getBoundingClientRect().y) {
      icon.classList.add("animated_style");
    } else {
      icon.classList.remove("animated_style");
    }
  });
  skillsInfo.forEach((info) => {
    if (window.scrollY >= info.getBoundingClientRect().y) {
      info.classList.add("animated_style");
    } else {
      info.classList.remove("animated_style");
    }
  });
});

var bars = document.querySelector("nav .bars"),
  aside = document.querySelector("aside");

function showAside() {
  aside.style.left = "0";
}

function hideAside() {
  aside.style.left = `-${aside.clientWidth}px`;
}
bars.onclick = function (e) {
  if (aside.style.left == "0px") {
    hideAside();
  } else {
    showAside();
  }
};

/************************************** Dark Mode Toggle */
var darkWrapper = document.querySelector("body > div");
var togglerBtn = document.querySelector(".darkmode_toggler");
var togglerBtnArray = document.querySelectorAll(".darkmode_toggler i");
var darkBackGround = document.querySelector(".darkmode_toggler_darkbackground");

togglerBtn.addEventListener("click", function (e) {
  togglerBtnArray.forEach((btn) => {
    btn.classList.toggle("hidden");
  });
});
togglerBtnArray.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("light_mode")) {
      darkWrapper.classList.add("dark");
      darkBackGround.style.clipPath = "circle(180%)";
    } else {
      darkWrapper.classList.remove("dark");
      darkBackGround.style.clipPath = "circle(0 at 95% 95%)";
    }
  });
});

var myCanvas = document.getElementById("canvas");

$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "#00adff",
      outlineThickness: 0.5,
      maxSpeed: 0.06,
      padding: "100",
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: "Arial",
      freezeDecel: true,
      fadeIn: 2000,
      initial: [0.3, -0.1],
      depth: 1,
    })
  ) {
    // something went wrong, hide the canvas container
    $("#myCanvasContainer").hide();
  }
});

// Create Vanilla tilt effect

const tiltEffectSetting = {
  max: 25,
  perspective: 1000,
};

const cards = document.querySelectorAll(".skill_card");

cards.forEach((card) => {
  card.addEventListener("mousemove", mouseMoveEffect);
  card.addEventListener("mouseleave", mouseLeave);
});

function mouseMoveEffect(e) {
  let cardWidth = this.clientWidth; // get card Width
  let cardHeight = this.clientHeight; // get Card Height
  let centerX = this.offsetLeft + cardWidth / 2; // get center of the card by substract the offset of the card from vp
  let centerY = this.offsetTop + cardHeight / 2;

  let mouseX = e.pageX - centerX;
  let mouseY = e.pageY - centerY;
  let rotateX = (tiltEffectSetting.max * mouseY) / (cardHeight / 2);
  let rotateY = -(tiltEffectSetting.max * mouseX) / (cardWidth / 2);
  this.style.transform = `perspective(${tiltEffectSetting.perspective}px) rotateX(${rotateX}deg) rotateY( ${rotateY}deg)`;
}
function mouseLeave() {
  this.style.transform = `perspective(${tiltEffectSetting.perspective}px) rotateX(0deg) rotateY(0deg)`;
}
