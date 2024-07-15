const slides = document.getElementsByClassName("slide");
  const left = document.getElementsByClassName("slider__left")[0];
  const right = document.getElementsByClassName("slider__right")[0];
  let slideon = document.getElementsByClassName("slide")[0];;
  let index = 0;

  function slideonUpdate() {
    slideon.classList.remove("slideon")
    slideon = document.getElementsByClassName("slide")[index];
    slideon.classList.add("slideon");
  }
  left.addEventListener("click", function() {
    if (--index < 0) index = slides.length-1;
    slideonUpdate()
  })
  right.addEventListener("click", function() {
    if (++index > slides.length-1) index = 0;
    slideonUpdate()
  })

let isBurger = true;
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", e => {

  if (isBurger) {
    menu.style.display = "block";
    burger.src = "images/noburger.svg";
  }
  else {
    menu.style.display = "none";
    burger.src = "images/burger.svg";
  }
  isBurger = !isBurger
})

/*links = document.getElementsByClassName("header__item")
for (anchor of links) {
  console.log(anchor);
  anchor.addEventListener("click", e => {
    e.preventDefault();
    console.log(anchor)
    console.log(anchor.firstChild.getAttribute("href"))
    console.log(anchor.childern);
  //  anchor.scrollIntoView()
    anchor.firstChild.scrollIntoView({
      behavior: "smooth"
    })
  })
}*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
