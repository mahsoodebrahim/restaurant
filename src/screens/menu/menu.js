import header from "../../components/header";
import hero from "../../components/hero";

export default function menu() {
  const menu = document.createElement("div");
  menu.id = "menu-page";
  menu.classList.add("page");

  // Hero Section
  menu.appendChild(hero("Menu", "World's Finest", "BBQ", "Menu"));

  return menu;
}
