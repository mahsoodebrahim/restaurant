import home from "./screens/home/home";
import about from "./screens/about/about";
import menu from "./screens/menu/menu";
import header from "./components/header";

// Create content container
const content = document.getElementById("content");

// Add header
content.appendChild(header());

// Render homepage by default
content.appendChild(home());

// Add Event Listeners to Navigation Links
const titleLink = document.getElementById("title-link");
titleLink.addEventListener("click", () => updatePage(home));

const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", () => updatePage(home));

const aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", () => updatePage(about));

const menuLink = document.getElementById("menu-link");
menuLink.addEventListener("click", () => updatePage(menu));

function updatePage(newPage) {
  content.removeChild(content.lastChild);
  content.appendChild(newPage());
}
