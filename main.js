/**
 *
 *
 *
 *
 *
 *
 */

// Dependencies
let dependencies = (() => {
  let imageCounter = 1;

  let intervalCounter = 1;
  return {
    imageCounter,
    intervalCounter,
  };
})();

// Display start up page
let displayHomePage = (function () {
  let container = document.querySelector(".container");

  // Slides
  let div = document.createElement("div");
  div.setAttribute("class", "slides");

  // Buttons
  let button1 = document.createElement("button");
  button1.setAttribute("class", "button1");
  button1.textContent = "previous";
  div.appendChild(button1);
  let button2 = document.createElement("button");
  button2.setAttribute("class", "button2");
  button2.textContent = "next";
  div.appendChild(button2);

  container.appendChild(div);

  // Dot Navigation
  function makeDotsEmpty() {
    let dotContainer = document.querySelector(".dot-container");
    for (let i = 0; i < dotContainer.children.length; i++) {
      dotContainer.children[i].classList.remove("fa-solid");
      dotContainer.children[i].classList.add("fa-regular");
    }
  }
  function dotPictureChange(dotNum) {
    dependencies.imageCounter = dotNum;
    displayImg(`images/img${dotNum}.jpg`, ".slides");
  }
  let dotContainer = document.createElement("div");
  dotContainer.setAttribute("class", "dot-container");
  for (let i = 1; i <= 5; i++) {
    let dot = document.createElement("i");
    dot.addEventListener("click", () => {
      console.log(i);
      makeDotsEmpty();
      dot.classList.add("fa-solid");
      dotPictureChange(i);
    });
    dot.classList.add("fa-regular", "fa-circle", `dot-${i}`);
    dotContainer.appendChild(dot);
  }
  dotContainer.children[0].classList.remove("fa-regular");
  dotContainer.children[0].classList.add("fa-solid");
  container.appendChild(dotContainer);

  return {
    dotPictureChange,
    makeDotsEmpty,
  };
})();

function displayImg(image, element) {
  let imageElement = document.querySelector(element);

  imageElement.style.backgroundImage = `url(${image})`;
  // imageElement.setAttribute("style", `background-image: ${image}`);
}
displayImg("images/img1.jpg", ".slides");

function next(params) {
  if (dependencies.imageCounter < 5) {
    dependencies.imageCounter += 1;
    displayImg(`images/img${dependencies.imageCounter}.jpg`, ".slides");
    displayHomePage.makeDotsEmpty();
    let dotContainer = document.querySelector(".dot-container");
    dotContainer.children[dependencies.imageCounter - 1].classList.remove(
      "fa-regular"
    );
    dotContainer.children[dependencies.imageCounter - 1].classList.add(
      "fa-solid"
    );
  }
}
function previous() {
  if (dependencies.imageCounter > 1) {
    dependencies.imageCounter -= 1;
    displayImg(`images/img${dependencies.imageCounter}.jpg`, ".slides");
    displayHomePage.makeDotsEmpty();
    let dotContainer = document.querySelector(".dot-container");
    dotContainer.children[dependencies.imageCounter - 1].classList.remove(
      "fa-regular"
    );
    dotContainer.children[dependencies.imageCounter - 1].classList.add(
      "fa-solid"
    );
  }
}

let button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
  previous();
});
let button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
  next();
});

let slideShow = (() => {
  setInterval(() => {
    // dependencies.imageCounter += 1;
    // console.log("SIII");
    // console.log(dependencies.intervalCounter);
    next();
    if (dependencies.imageCounter >= 5) {
      stopTimer();
    }
  }, 5000);
})();

function stopTimer() {
  clearInterval(slideShow);
  // dependencies.intervalCounter = 0;
  dependencies.imageCounter = 0;
  // sslideShow();
}

/**
 * add automatic timer
 *  slides to next image every 5 seconds
 *  it just start on to the first picture
 *    the timer never actually restarts
 *  the dots move with it
 *  find out how to get it from 1-5 repeatedly, 1-5, 1-5, 1-5
 *    then it could just use next()
 */
