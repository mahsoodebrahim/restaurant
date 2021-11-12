import header from "../../components/header";
import hero from "../../components/hero";

export default function about() {
  const about = document.createElement("div");
  about.id = "about-page";
  about.classList.add("page");

  // Header Section
  about.appendChild(header());

  // Hero Section
  about.appendChild(hero("About Us", "Since 1989", "Family Owned", "History"));

  return about;
}
