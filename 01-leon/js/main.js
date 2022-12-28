// START TOGGLE ICON
let icon = document.querySelector(".icon");
let links = document.querySelector(".links ul");

icon.onclick = (e) => {
   e.stopPropagation();
   icon.classList.toggle("active");
   links.classList.toggle("active");
};
URL.onclick = () => {
   e.stopPropagation();
};
document.addEventListener("click", (e) => {
   if (e.target !== icon && e.target !== links) {
      if (links.classList.contains("active")) {
         icon.classList.toggle("active");
         links.classList.toggle("active");
      }
   }
});

// START SCROLL TO SECTION FUNCTION
function scrollToSection(element) {
   element.forEach((ele) => {
      ele.addEventListener("click", (e) => {
         e.preventDefault();
         document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
         });
      });
   });
}
scrollToSection(document.querySelectorAll(".links ul a"));
scrollToSection(document.querySelectorAll(".line-links ul a"));

// handle active for links
let allLinks = document.querySelectorAll(".line-links ul li");
allLinks.forEach((ele) => {
   ele.onclick = () => {
      allLinks.forEach((ele) => {
         ele.classList.remove("active");
      });
      ele.classList.add("active");
   };
});

//SCROLL BAR
window.addEventListener("scroll", () => {
   let ele = this.document.querySelector(".scroll-bar");
   let height = document.documentElement; // The page
   let scrollTop = height.scrollTop || document.body.scrollTop; // the scrollTop in where for page
   let scrollHeight = height.scrollHeight || document.body.scrollHeight; // the height for page

   let percent = (scrollTop / (scrollHeight - height.clientHeight)) * 100;

   ele.style.width = percent + "%";
});

// Footer
let copyright = document.querySelector(".footer .copyright");
copyright.innerHTML = new Date(Date.now()).getFullYear();
