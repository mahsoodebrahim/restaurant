export default function hero(
  primaryText,
  secondaryText,
  tertiaryText,
  buttonText
) {
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  const h1 = document.createElement("h1");
  h1.innerHTML = primaryText;

  const h2 = document.createElement("h2");
  h2.innerHTML = secondaryText;

  const span = document.createElement("span");
  span.classList.add("line-before-after");
  span.innerHTML = '<i class="fas fa-star"></i>';

  const p = document.createElement("p");
  p.innerHTML = tertiaryText;

  const input = document.createElement("input");
  input.type = "button";
  input.value = buttonText;

  heroContainer.appendChild(h1);
  heroContainer.appendChild(h2);
  heroContainer.appendChild(span);
  heroContainer.appendChild(p);
  heroContainer.appendChild(input);
  hero.appendChild(heroContainer);

  return hero;
}
