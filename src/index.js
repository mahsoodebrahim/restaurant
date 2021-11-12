import home from "./screens/home/home";
import about from "./screens/about/about";
import menu from "./screens/menu/menu";
import header from "./components/header";

const content = document.getElementById("content");
content.appendChild(header());
content.appendChild(home());
