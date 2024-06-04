const navbar_top = document.querySelector(".navbar-top");
let Lastscrolltop = 0;
const move_up = document.querySelector(".move-up");
const left_arrow = document.querySelector(".left_arrow")
const right_arrow = document.querySelector(".right_arrow")
const card_container = document.querySelector(".card-container")


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

left_arrow.addEventListener('click',(e)=>{
  card_container.classList.add('slide')
  card_container.classList.remove('rev-slide')
alert("hello worljiji")
})
right_arrow.addEventListener('click',(e)=>{
  card_container.classList.add('rev-slide')
  card_container.classList.remove('slide')

alert("hello world")
})


