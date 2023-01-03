const list = [
  {
    name: "Emanuel Kant",
    quote: "Beauty is in the eye of the beholder",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    color: "#b02121",
  },

  {
    name: "Marie Curie",
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    color: "#8521b0",
  },

  {
    name: "Archimedes",
    quote:
      "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    color: "#47b021",
  },

  {
    name: "Galileo Galilei",
    quote: "Passion is the genesis of genius.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    color: "#2193b0",
  },

  {
    name: "Platon",
    quote:
      "Truth is the beginning of every good to the gods, and of every good to man.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    color: "#b0215d",
  },
];

let background = document.querySelector(".testimonials-container");
let quote = document.querySelector(".text");
let authorName = document.querySelector(".name");
let author = document.getElementsByClassName("author");

function showInfo() {
  let arr = Array.from(author);
  for (let i = 0; i < arr.length; i++) {
    author[i].addEventListener("click", function () {
      quote.textContent = list[i].quote;
      background.style.backgroundColor = list[i].color;
      authorName.textContent = list[i].name;
      for (let j = 0; j < arr.length; j++) {
        if (author[j].classList.contains("selected")) {
          author[j].classList.remove("selected");
          author[i].classList.add("selected");
        } else {
          author[i].classList.add("selected");
        }
      }
    });
  }
}
showInfo();
