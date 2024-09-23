document.addEventListener("DOMContentLoaded", () => {
  const toggleArrow = document.getElementById("toggle-arrow");
  const menuItems = document.getElementById("menu-items");
  const exercise1 = document.getElementById("exercise1");
  const exercise2 = document.getElementById("exercise2");
  const exercise1s = document.getElementById("exercise1s");
  const exercise2s = document.getElementById("exercise2s");
  const colorSliderSection = document.getElementById("color-slider");
  const slider = document.getElementById("colorSlider");
  const sliderMessage = document.getElementById("slider-text");
  const pictureChooserSection = document.getElementById("picture-chooser");
  const pictureDisplay = document.getElementById("picture");

  //Shows all of Exercise 1, and Shows all of Exercise 2 for Larger Resolutions//
  exercise1.addEventListener("click", () => {
    colorSliderSection.style.display = "block";
    pictureChooserSection.style.display = "none";
  });

  exercise2.addEventListener("click", () => {
    pictureChooserSection.style.display = "block";
    colorSliderSection.style.display = "none";
  });

  //Shows all of Exercise 1, and Shows all of Exercise 2 for Smaller Resolutions//
  exercise1s.addEventListener("click", () => {
    colorSliderSection.style.display = "block";
    pictureChooserSection.style.display = "none";
  });

  exercise2s.addEventListener("click", () => {
    pictureChooserSection.style.display = "block";
    colorSliderSection.style.display = "none";
  });

  //Toggle//
  toggleArrow.addEventListener("click", () => {
    if (menuItems.style.display === "none" || !menuItems.style.display) {
      menuItems.style.display = "block";
      toggleArrow.textContent = "▲";
    } else {
      menuItems.style.display = "none";
      toggleArrow.textContent = "▼";
    }
  });
  //Script for Color slider//

  slider.addEventListener("input", (e) => {
    const redValue = e.target.value;
    document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    if (redValue < 70) {
      sliderMessage.textContent = "Cold!!";
    } else if (redValue < 150) {
      sliderMessage.textContent = "Average Temp!!";
    } else {
      sliderMessage.textContent = "Hot!!";
    }
  });

  //Script for Picture Chooser//
  document.querySelectorAll("#picture-chooser button").forEach((button) => {
    button.addEventListener("click", (e) => {
      let size = "";
      if (e.target.id === "small") {
        size = "100";
      } else if (e.target.id === "medium") {
        size = "200";
      } else if (e.target.id === "large") {
        size = "500";
      }
      pictureDisplay.innerHTML = `<img src="https://picsum.photos/${size}" alt="Random Image with different sizes">`;
    });
  });

  //TOGGLE BUTTON STUFF//

  const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");

    window.onload = () => {
      document.getElementById("toggle-arrow").onclick = toggleNav;
    };
  };
});
