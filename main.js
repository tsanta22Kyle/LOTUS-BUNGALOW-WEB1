const navbar_top = document.querySelector(".navbar-top");
let Lastscrolltop = 0;
const move_up = document.querySelector(".move-up");

window.addEventListener("scroll", (e) => {
  let scrolltop = document.documentElement.scrollTop;

  if (scrolltop > Lastscrolltop) {
    navbar_top.classList.add("h-0");
    navbar_top.classList.remove("h-7");
    move_up.classList.add("-translate-y-7");
  } else {
    navbar_top.classList.remove("h-0");
    navbar_top.classList.add("h-7");
    move_up.classList.remove("-translate-y-7");
    move_up.classList.add("translate-y-0");
  }
  Lastscrolltop = scrolltop;
});
