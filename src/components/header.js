export default function header() {
  const header = document.createElement("header");

  //titleLink
  header.appendChild(titleLink("Grill House"));

  // navigation
  header.appendChild(navigation());

  return header;
}

function titleLink(pageTitle) {
  const title = document.createElement("h2");
  title.innerHTML = pageTitle;
  title.classList.add("title");

  const titleLink = document.createElement("a");
  titleLink.href = "#";
  titleLink.id = "title-link";
  titleLink.appendChild(title);

  return titleLink;
}

function navigation() {
  const navigation = document.createElement("div");
  navigation.classList.add("navigation");

  // page naviation
  navigation.appendChild(pageNavigation());

  // socials
  navigation.appendChild(socials());

  return navigation;
}

function pageNavigation() {
  const nav = document.createElement("nav");

  const ul = document.createElement("ul");
  ul.classList.add("page-navigation");

  const pages = ["Home", "Menu", "About"];
  for (const page of pages) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = page;
    a.id = `${page.toLowerCase()}-link`;

    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);

  return nav;
}

function socials() {
  const socials = document.createElement("div");
  socials.classList.add("social");

  const ul = document.createElement("ul");
  ul.classList.add("social-icons");

  const icons = [
    '<i class="fab fa-twitter-square"></i>',
    '<i class="fab fa-facebook-square"></i>',
    '<i class="fab fa-instagram"></i>',
  ];

  for (const icon of icons) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = icon;

    li.appendChild(a);
    ul.appendChild(li);
  }

  socials.appendChild(ul);
  return socials;
}
