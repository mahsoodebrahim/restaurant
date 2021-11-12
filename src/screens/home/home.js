import header from "../../components/header";
import hero from "./homeHero";

export default function home() {
  const homepage = document.createElement("div");
  homepage.id = "homepage";

  // Header Section
  homepage.appendChild(header());

  // Hero Section
  homepage.appendChild(hero());

  return homepage;
}
