const getCooks = async () => {
  const url = "https://cthiele1.github.io/csce242/json/cooks.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const getCookSection = (cook) => {
  const section = document.createElement("div");
  section.className = "cook-section";
  section.innerHTML = `
      <img src="${cook.img_name}"/>
      <h2>${cook.name}</h2>
      <li>${cook.hometown}</li>
      <li>${cook.favorite_recipe}</li>
      <li>${cook.rating}/5.0</li>
      <li>${cook.goals}</li>
    `;
  return section;
};

const showCooks = async () => {
  const cooks = await getCooks();
  if (!Array.isArray(cooks)) {
    console.error("Expected an array of cooks");
    return;
  }
  cooks.forEach((cook) => {
    document.getElementById("cooks-section").append(getCookSection(cook));
  });
};

// Show all of the cooks when the page loads
showCooks();

const hamburgerMenu = document.getElementById("hamburger-menu");
const navContainer = document.getElementById("bottomh-nav");

hamburgerMenu.onclick = () => {
  navContainer.classList.toggle("show");
};
