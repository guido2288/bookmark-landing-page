const movileMenu = document.getElementById("mobile-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const img = document.getElementById("img-Menu");
const textDisplay = document.getElementById("menu-text");
const tabs = document.querySelectorAll(".selector");
const questions = document.querySelectorAll(".question");
const form = document.getElementById("contact-form");
const input = document.getElementById("input");
const errorMsg = document.getElementById("error-msg");
const iconError = document.getElementById("error-img");


const options = [
  {
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites"
  },
  {
    img:"./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
    img:"./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }

];


function toggleMenu() {
  movileMenu.classList.toggle('close');

  console.log(document.body.style.overflow)
}

hamburgerBtn.addEventListener('click', () => {
  movileMenu.classList.toggle('close');
  document.body.style.overflow = "hidden"
});


closeBtn.addEventListener('click', () => {
  movileMenu.classList.toggle('close');
  document.body.style.overflow = "auto"
});

tabs.forEach((option, index) => {
  option.addEventListener("click", () => {
    createDisplay(index)
  })
});


const createDisplay = (option) => { 

  textDisplay.textContent = "";

  const item = options[option]

  tabs.forEach( element => {
    element.classList.remove("active")
  } )

  tabs[option].classList.toggle("active");

  img.setAttribute("src", `${item.img}`)
  img.setAttribute("alt", "illustration-features");

  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const button = document.createElement('button');

  title.textContent = item.title;
  paragraph.textContent = item.paragraph;
  button.textContent = "More Info";

  textDisplay.appendChild(title);
  textDisplay.appendChild(paragraph);
  textDisplay.appendChild(button);
}

questions.forEach(function (question) {
  question.addEventListener("click", function () {
      const arrowIcon = this.querySelector(".arrow-icon")
      const answer = this.nextElementSibling;
      const allAnswers = document.querySelectorAll(".answer");

      allAnswers.forEach(function (ans) {
          if (ans !== answer) {
              ans.style.maxHeight = null;
          }
      });

      if (arrowIcon.classList.contains("active")) {
          arrowIcon.classList.remove("active")
      } else {
          const allArrowIcons = document.querySelectorAll(".arrow-icon")
          allArrowIcons.forEach(function (icon) {
              icon.classList.remove("active")
          })
          arrowIcon.classList.add("active")
      }

      if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
      } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
      }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = input.value;
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if(email.match(validEmail)){
    errorMsg.classList.toggle("inactive");
    input.classList.toggle("error");
    iconError.classList.toggle("show")
  }else{
    errorMsg.remove("inactive")
    input.classList.remove("error")
    iconError.classList.remove("show")
  }
  
})

createDisplay(0);