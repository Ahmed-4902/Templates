let log = console.log;
//clear All Active Function
function clearActive(elements) {
   elements.forEach((ele) => {
      ele.classList.remove("active");
   });
}
// Handle Active State
function handleActive(e) {
   // Remove Active Claass from all Childrens
   e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
   });
   // Add Active class on target
   e.target.classList.add("active");
}
//Start Change color in option settings
// Check If Theres's local Storgae Color option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
   document.documentElement.style.setProperty("--main-color", mainColors);
   //check for active class from all colors list item
   document.querySelectorAll(".colors-list li").forEach((ele) => {
      ele.classList.remove("active");
      // Add active Class on ele with data-color === local Storage item
      if (ele.dataset.color === mainColors) {
         ele.classList.add("active"); // Add Active class
      }
   });
}
// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
   li.addEventListener("click", (e) => {
      // Set Color on Root
      document.documentElement.style.setProperty(
         "--main-color",
         e.target.dataset.color
      );
      localStorage.setItem("color_option", e.target.dataset.color); // Set Color On local Storage
      handleActive(e);
   });
});

// Start Background change and local storge switch
let backgroundOption = true; // random Background option
let backgroundInterval; // Variable to Control the Interval

// check if there's local Storage Random Background item
let backgroudLocalItem = localStorage.getItem("background_option");
if (backgroudLocalItem !== null) {
   clearActive(document.querySelectorAll(".random-backgrounds span"));
   if (backgroudLocalItem === "true") {
      backgroundOption = true;
      document.querySelector(".yes").classList.add("active");
   } else {
      backgroundOption = false;
      document.querySelector(".no").classList.add("active");
   }
}
// Switch backgrounds in Option box
const randomBackgrounds = document.querySelectorAll(".random-backgrounds span");
randomBackgrounds.forEach((span) => {
   span.addEventListener("click", (e) => {
      handleActive(e);
      if (e.target.dataset.background === "yes") {
         backgroundOption = true;
         randomizImgs();
         localStorage.setItem("background_option", true);
      } else {
         backgroundOption = false;
         clearInterval(backgroundInterval);
         localStorage.setItem("background_option", false);
      }
   });
});

// Change Background imgae
let LandingPage = document.querySelector(".landing-page");
let imgsArray = [];
for (let i = 1; i <= 5; i++) {
   imgsArray.push(`0${i}.jpg`);
}
function randomizImgs() {
   // Function To Randomize Imgs
   if (backgroundOption) {
      backgroundInterval = setInterval(() => {
         let randomNumber = Math.floor(Math.random() * imgsArray.length);
         LandingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
      }, 10000);
   }
}
randomizImgs();

// Toggle spin Class on iocn
document.querySelector(".toggle-settings i").onclick = function () {
   this.classList.toggle("fa-spin");
   this.parentElement.parentElement.classList.toggle("open");
};

// skills Section on scroling
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
   if (window.scrollY >= ourSkills.offsetTop - 500) {
      let allSkills = document.querySelectorAll(
         ".skill-box .skill-progress span"
      );
      allSkills.forEach((skill) => {
         skill.style.width = skill.dataset.progress;
      });
   }
};

//Start ourGallery Section
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
   img.addEventListener("click", (e) => {
      //Create overlay Element
      let overlay = document.createElement("div");
      overlay.className = "popup-overlay";
      document.body.appendChild(overlay);

      // Create the Popup
      let popupBox = document.createElement("div");
      popupBox.className = "popup-box";

      if (img.alt !== null) {
         // Create Heading
         let imgHeading = document.createElement("h3");
         imgHeading.appendChild(document.createTextNode(img.alt));
         popupBox.appendChild(imgHeading);
      }
      // Create the Image
      let popupImage = document.createElement("img");
      popupImage.src = img.src;
      popupBox.appendChild(popupImage);

      document.body.appendChild(popupBox);

      // Create The close Span
      let closeButton = document.createElement("span");
      closeButton.appendChild(document.createTextNode("X"));
      closeButton.className = "close-button";
      popupBox.appendChild(closeButton);
   });
});
// Close Popup
document.addEventListener("click", (e) => {
   if (e.target.className == "close-button") {
      e.target.parentNode.remove();
      document.querySelector(".popup-overlay").remove();
   }
});
//End ourGallery Section

// create nav Bullets
let sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
   let bullet = document.createElement("div");
   bullet.setAttribute("data-section", `.${sections[i].className}`);
   bullet.className = "bullet";
   document.querySelector(".nav-bullets").appendChild(bullet);

   let tooltip = document.createElement("div");
   tooltip.className = "tooltip";
   tooltip.appendChild(document.createTextNode(`${sections[i].className}`));
   bullet.appendChild(tooltip);
}

// Function scroll to position section
function ScrollToSomeWhere(element) {
   element.forEach((ele) => {
      ele.addEventListener("click", (e) => {
         //if (e.target.classList.contains("bullet")) {
         e.preventDefault();
         document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
         });
         //}
      });
   });
}
ScrollToSomeWhere(document.querySelectorAll(".nav-bullets .bullet")); // for bullets in beside
ScrollToSomeWhere(document.querySelectorAll(".links a")); // for links in header

// Show and hide bullts in beside
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
   clearActive(bulletsSpan);
   if (bulletLocalItem === "block") {
      bulletsContainer.style.display = "block";
      document.querySelector(".bullets-option .yes").classList.add("active");
   } else {
      bulletsContainer.style.display = "none";
      document.querySelector(".bullets-option .no").classList.add("active");
   }
}
bulletsSpan.forEach((span) => {
   span.addEventListener("click", (e) => {
      if (span.dataset.display === "show") {
         bulletsContainer.style.display = "block";
         localStorage.setItem("bullets_option", "block");
      } else {
         bulletsContainer.style.display = "none";
         localStorage.setItem("bullets_option", "none");
      }
      handleActive(e);
   });
});

// Reset Button
document.querySelector(".reset-option").onclick = function () {
   //localStorage.clear();
   localStorage.removeItem("bullets_option");
   localStorage.removeItem("background_option");
   localStorage.removeItem("color_option");
   window.location.reload();
};

// Start Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
   e.stopPropagation(); // Stop Propagetion: merge all item in element
   this.classList.toggle("menu-active"); // Show Triange
   tLinks.classList.toggle("open"); // Show menu links
};
tLinks.onclick = function (e) {
   e.stopPropagation(); // Stop Propagetion: merge all item in element
};

// to Close the menu when click anywher in screen
document.addEventListener("click", (e) => {
   if (e.target !== toggleBtn && e.target !== tLinks) {
      if (tLinks.classList.contains("open")) {
         toggleBtn.classList.toggle("menu-active");
         tLinks.classList.toggle("open");
      }
   }
});

window.addEventListener("scroll", () => {
   let ele = this.document.querySelector(".scroll-bar");
   let height = document.documentElement; // The page
   let scrollTop = height.scrollTop || document.body.scrollTop; // the scrolltop in where for page
   let scrollHeight = height.scrollHeight || document.body.scrollHeight; // the height for page

   let percent = (scrollTop / (scrollHeight - height.clientHeight)) * 100;

   ele.style.width = percent + "%";
});

//log(document.documentElement.scrollTop)
//log(document.body.scrollTop)
