
const date = new Date();
document.getElementById("year").innerText = date.getFullYear();


const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav"); 

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
