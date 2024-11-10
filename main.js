const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// A menü gombban található ikon (i elem) kiválasztása
const menuBtnIcon = menuBtn.querySelector("i");

// Eseménykezelő hozzáadása a menü gombhoz (amely a "menu-btn" ID-t használja)
menuBtn.addEventListener("click", (e) => {
  // Az "open" osztály hozzáadása vagy eltávolítása a "navLinks" elemből
  // Ha az "open" osztály már ott van, akkor eltávolítjuk, ha nincs, akkor hozzáadjuk
  navLinks.classList.toggle("open");

  // Ellenőrizzük, hogy a "navLinks" elem tartalmazza-e az "open" osztályt
  const isOpen = navLinks.classList.contains("open");

  // Az ikon osztályának módosítása attól függően, hogy a menü nyitva van-e vagy zárva
  // Ha nyitva van, akkor az "X" ikont (ri-close-line) rakjuk be, ha zárva van, akkor a hamburger menüt (ri-menu-line)
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Eseménykezelő hozzáadása a navigációs linkekhez
navLinks.addEventListener("click", (e) => {
  // Az "open" osztály eltávolítása a "navLinks" elemből, hogy elrejtsük a menüt
  navLinks.classList.remove("open");

  // Az ikon visszaállítása a hamburger menü ikonjára, mivel a menü most zárva van
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

