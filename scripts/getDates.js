document.querySelector("#lastModified").textContent = "Las Modification: " + document.lastModified;

const rightNow = new Date();
console.log(rightNow);
console.log(rightNow.getFullYear());
document.querySelector("#year").textContent = rightNow.getFullYear();

let date =  new Date().getFullYear();
console.log(date);

