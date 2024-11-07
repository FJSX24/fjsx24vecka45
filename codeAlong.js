// console.log("GOOOD MORNING FJSX24! Det är torsdag idag.");

// Metoden createElement

// "createElement är en metod som låter oss skapa nya HTML-element med JavaScript."

// "Syntaxen är:
// document.createElement("elementName");
// Exempel:

// let newParagraf = document.createElement("p");
// console.log("newParagraf", newParagraf);

// ------------------------------------------------------------------------------

// Metoden appendChild

// "appendChild används för att lägga till ett barn-element till ett förälder-element."

// "Syntaxen är:
// parentElement.appendChild(childElement);

// Exempel:

// let divContentParent = document.getElementById("innehåll");

// divContentParent.appendChild(newParagraf);

// newParagraf.innerText = "jag är ett p element";

// console.log("divContentParent ", divContentParent);

// ------------------------------------------------------------------------------

// Metoden removeChild

// "removeChild används för att ta bort ett barn-element från dess förälder."

// "Syntaxen är:
// parentElement.removeChild(childElement);

// Exempel

// divContentParent.removeChild(divContentParent.children[0]);
// divContentParent.removeChild(divContentParent.children[0]);

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------

// Exempel: Ta Bort en Paragraf

// Ta bort den nya paragrafen efter 5 sekunder
// setTimeout(() => {
//   divContentParent.removeChild(newParagraf);
// }, 5000);

// ------------------------------------------------------------------------------

// Exempel: Skapa en Lista från en Array

// let fruits = ["apple", "orange", "banana", "melon"];

// let list = document.createElement("ul");

// fruits.forEach(function (fruit) {
//   let listItem = document.createElement("li");
//   listItem.textContent = fruit;
//   list.appendChild(listItem);
// });

// document.body.appendChild(list);
// ---------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
