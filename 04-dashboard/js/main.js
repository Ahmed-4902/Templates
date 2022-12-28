// Start Increase Numbers&full progress in Targets&Tickets
// Variables
let targetsSection = document.querySelector(".page .wrapper .targets");
let ticketsSection = document.querySelector(".page .wrapper .tickets");
let progrssSpan = document.querySelectorAll(
   ".page .wrapper .targets .progress-span"
);
let numsTargets = document.querySelectorAll(".page .wrapper  .number");
let numsTickets = document.querySelectorAll(".page .wrapper  .numbers");
let mediaQuery = window.matchMedia("(min-width: 1200px)");
let startedTargets = false;
let startedTickets = false;

// Start Projedts
let progressCard = document.querySelectorAll(".projects .card .progress");
let cardSection = document.querySelector(".projects .card ");
// End Projedts

window.onload = function () {
   progressCard.forEach((ele) => {
      // projects
      ele.style.width = ele.dataset.goal;
   });
   if (mediaQuery.matches) {
      progrssSpan.forEach((span) => {
         span.style.width = span.dataset.goal;
      });
      if (!startedTargets) {
         numsTargets.forEach((num) => startCount(num));
      }
      startedTargets = true;
      if (!startedTickets) {
         numsTickets.forEach((num) => startCount(num));
      }
      startedTickets = true;
   } else {
      window.onscroll = function () {
         if (window.scrollY >= targetsSection.offsetTop - 300) {
            progrssSpan.forEach((span) => {
               span.style.width = span.dataset.goal;
            });
            if (!startedTargets) {
               numsTargets.forEach((num) => startCount(num));
            }
            startedTargets = true;
         }
         if (window.scrollY >= ticketsSection.offsetTop - 300) {
            if (!startedTickets) {
               numsTickets.forEach((num) => startCount(num));
            }
            startedTickets = true;
         }
      };
   }
};

function startCount(el) {
   let goal = el.dataset.goal;
   let conuter = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
         clearInterval(conuter);
      }
   }, 2000 / goal);
}
// End Increase Numbers&full progress in Targets&Tickets

// Start Tasks
let icon = document.querySelectorAll(".page .wrapper .tasks i");

icon.forEach((num) => {
   num.onclick = function () {
      num.previousElementSibling.classList.toggle("deleted");
   };
});
// End Tasks

// Start Scroll Progress

window.addEventListener("scroll", () => {
   let el = document.querySelector(".scroll-bar");
   console.log(el);
   let h = document.documentElement;
   let st = h.scrollTop || document.body.scrollTop;
   let sh = h.scrollHeight || document.body.scrollHeight;
   let percent = (st / (sh - h.clientHeight)) * 100;
   el.style.width = percent + "%";
});

// Copyright
let copyright = document.querySelector(".copy");
copyright.innerHTML = new Date(Date.now()).getFullYear();
