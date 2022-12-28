// // Start Landing  << Slider Images >>
let sliderImgs = Array.from(document.querySelectorAll(".landing img"));
let slidesCount = sliderImgs.length;
let currentSlide = 3;
let counter = document.querySelector(".counter");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create ul
let bullets = document.createElement("ul");
bullets.classList.add("bullets");
for (let i = 1; i <= slidesCount; i++) {
   let bullet = document.createElement("li");
   bullet.setAttribute("data-index", i);
   bullets.appendChild(bullet);
}
counter.appendChild(bullets);

// get The New Created Ul
let bulletsCreateUl = document.querySelector(".bullets");
let arrayBullets = Array.from(document.querySelectorAll(".bullets li"));

// Loop Through all bullets item
for (let i = 0; i < arrayBullets.length; i++) {
   arrayBullets[i].onclick = function () {
      currentSlide = parseInt(this.getAttribute("data-index"));
      theChecker();
   };
}

// Trigger the checker function
theChecker();

// Next & prev Slide Function
function nextSlide() {
   if (nextButton.classList.contains("disabled")) {
      return false;
   } else {
      currentSlide++;
      theChecker();
   }
}
function prevSlide() {
   if (prevButton.classList.contains("disabled")) {
      return false;
   } else {
      currentSlide--;
      theChecker();
   }
}

// Create The Checker function
function theChecker() {
   removeAllActive();

   sliderImgs[currentSlide - 1].classList.add("active");
   bulletsCreateUl.children[currentSlide - 1].classList.add("active");

   // Check if current slide is the First
   if (currentSlide === 1) {
      prevButton.classList.add("disabled");
   } else {
      prevButton.classList.remove("disabled");
   }
   if (currentSlide === slidesCount) {
      nextButton.classList.add("disabled");
   } else {
      nextButton.classList.remove("disabled");
   }
}

// Function Remove All Active Class
function removeAllActive() {
   sliderImgs.forEach(function (img) {
      img.classList.remove("active");
   });
   arrayBullets.forEach(function (bullet) {
      bullet.classList.remove("active");
   });
}
// // End Landing

// Start Portfolio

let switcherLis = document.querySelectorAll(".portfolio .shuffle li");
let boxes = Array.from(
   document.querySelectorAll(".portfolio .imgs-container .box")
);
let moreBtn = document.querySelector(".portfolio .more");
let currentItem = 8;

// << Our work fillter >>
switcherLis.forEach((li) => {
   li.addEventListener("click", function () {
      switcherLis.forEach((li) => {
         li.classList.remove("active");
         this.classList.add("active");
         moreBtn.style.display = "block";
      });
      boxes.forEach((box) => {
         box.style.display = "none";
      });
      document.querySelectorAll(this.dataset.cat).forEach((el) => {
         el.style.display = "block";
      });
   });
});

// << More Button >>
moreBtn.onclick = function () {
   for (let i = currentItem; i < currentItem + 4; i++) {
      boxes[i].style.display = "block";
   }
   currentItem += 4;
   if (currentItem >= boxes.length) {
      moreBtn.style.display = "none";
   }
};
// << Less Button >>

// End Portfolio

// Start Stats
let numbers = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector(".stats");
let started = false;

// Start Our Skills
let skillsSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(
   ".our-skills .skills .prog .prog-span "
);
let nums = document.querySelectorAll(".our-skills .skills .prog .number ");
let start = false;

window.onscroll = function () {
   if (window.scrollY >= skillsSection.offsetTop - 100) {
      progress.forEach((num) => {
         num.style.width = num.dataset.goal;
      });
      if (!start) {
         nums.forEach((num) => startCount(num));
      }
      start = true;
   } else if (window.scrollY >= statsSection.offsetTop - 300) {
      if (!started) {
         numbers.forEach((num) => startCount(num));
      }
      started = true;
   }
};

function startCount(el) {
   let goal = el.dataset.goal;
   let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
         clearInterval(count);
      }
   }, 2000 / goal);
}
// End Stats

// Start Scroller
window.addEventListener("scroll", function () {
   let el = this.document.querySelector(".scroll-bar");
   let height = document.documentElement;
   let scrollTop = height.scrollTop || document.body.scrollTop;
   let scrollHeight = height.scrollHeight || document.body.scrollHeight;

   let percent = (scrollTop / (scrollHeight - height.clientHeight)) * 100;

   el.style.width = percent + "%";
});

// CopyRight
let copy = document.querySelector(".copyright .copy");
copy.innerHTML = new Date(Date.now()).getFullYear();
