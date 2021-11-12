import header from "../../components/header";
import hero from "../../components/hero";

export default function home() {
  const homepage = document.createElement("div");
  homepage.id = "homepage";
  homepage.classList.add("page");

  // Header Section
  // homepage.appendChild(header());

  // Hero Section
  homepage.appendChild(
    hero("Welcome", "The Grill House", "Coming Soon", "Explore")
  );

  return homepage;
}
