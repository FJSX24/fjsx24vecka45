console.log("Godmorgon KYH det är Fredag.");

// getElementById
const headLine = document.getElementById("rubrik");

// getElementsByClassName
const paragraf = document.getElementsByClassName("text");

// querySelector och querySelectorAll
const allListItem = document.querySelectorAll("p");

// textContent vs. innerHTML
// headLine.innerText = "Hej KYH!";
// headLine.textContent = "Hej KYH!";
// headLine.innerHTML += `<li class="itemFirst">Första</li>`;

// Ändra Attribut med setAttribute
let catImage = document.getElementById("bild");

catImage.setAttribute("src", "bild3.jpg");
// catImage.src = "bild3.jpg";
catImage.setAttribute("alt", "beatiful cat?");
// catImage.alt = "beatiful cat?";

// Ändra Stilar med style
// headLine.style.color = "#c4c4c4";
headLine.style.color = "blue";
headLine.style.fontSize = "47px";

// Använda classList för att Hantera Klasser
const btn = document.getElementById("knapp");
// btn.classList.add("addAClass");
// btn.classList.add("addAClass2");
// btn.classList.add("addAClass3", "addAClass4");
// btn.classList.remove("addAClass");

// btn.classList.toggle("addAClass");
// btn.classList.toggle("addAClass");
// btn.classList.toggle("addAClass");
// btn.classList.toggle("addAClass");
// btn.classList.toggle("addAClass");

// console.log("btn: ", btn);
// console.log("headLine: ", headLine);
// console.log(paragraf);
// PAUS
// --------------------------------
// --------------------------------
// --------------------------------

// addEventListener:
// Syntax: element.addEventListener("event", funktion)

// --------------------------------

// Vanliga Händelser

// Lista några vanliga händelser:

// --------------------------------
// click - När användaren klickar på ett element:
// btn.addEventListener("click", function (event) {
//   //   event.preventDefault();

//   console.log("event: ", event.target.textContent);
//   event.target.textContent = "hhahaha";
//   //   console.log("event: ", event.target.textContent);
//   //   console.log("hej", "Hej");
// });

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let footer = document.createElement("p");
  footer.innerText = "hej";

  let main = document.getElementById("main");

  main.removeChild(catImage);
  //   headLine.remove();

  main.appendChild(footer);

  console.log("main", main);
});

// --------------------------------
// mouseover - När muspekaren flyttas över ett element OCH mouseout - När muspekaren lämnar ett element.

// headLine.addEventListener("mouseover", function () {
//   headLine.style.color = "red";
// });

// headLine.addEventListener("mouseout", function () {
//   headLine.style.color = "blue";
// });

// --------------------------------
