document.getElementById("button").addEventListener("click", () => {
  const starsBox = document.getElementById("box-w-stars");
  const MessageDisplay = document.querySelector(".dis-message");
  const input = document.getElementById("star-input");
  const numberStars = parseInt(input.value);
  const errormessage = document.getElementById("error");
  starsBox.innerHTML = "";
  MessageDisplay.textContent = "";
  errormessage.innerHTML = "";

  /* If the number of stars that the user enters is less or equal to 0 it will print out this */
  if (numberStars <= 0 || isNaN(numberStars)) {
    errormessage.textContent = "Invalid Input";
    return;
  }

  /*Changes the suffix after each number when you click on the star*/

  const Suffix = (number) => {
    const lastOne = number % 10;
    const lastTwo = number % 100;

    if (lastTwo >= 11 && lastTwo <= 13) {
      return "th";
    }

    switch (lastOne) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  /* Adds a star for each number more than 0, 1,2,3 */
  //For Loop//
  for (let i = 0; i < numberStars; i++) {
    const star = document.createElement("i");
    star.classList.add("star");
    star.style.top = Math.random() * (starsBox.clientHeight - 20) + "px";
    star.style.left = Math.random() * (starsBox.clientWidth - 20) + "px";
    star.setAttribute("star-number", i + 1);
    /*Displays the message for the start once clicked */
    star.addEventListener("click", () => {
      const starnumber = star.getAttribute("star-number");
      const suffix = Suffix(starnumber);
      MessageDisplay.textContent = `${starnumber}${suffix} star!!`;
    });

    starsBox.appendChild(star);
  }
});
