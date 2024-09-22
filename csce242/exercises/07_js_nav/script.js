/* When the hamburger is clicked, toggle between showing and hiding the nav items */

document.querySelector("#toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("click-link").onclick = (event) => {
  event.preventDefault(); //do not go to the links destination
  console.log(" you clicked a link ! ! ! ");
};

/* Change the bal color */
document.getElementById("txt-color").onchange = (e) => {
  document
    .getElementById("ball")
    .style.setProperty("background-color".etarget.value);
};

/* Show color message */
document.getElementById ("btn-show-color").onclick = () => {
  const color = document.getElementbyId("txt-enter-color").value.toLowerCase().trim();
  const messageP = document.getElementById("color-message");
  let mood = "";

  if (color == "red"){
    mood ="angry";

  }
  else if (color == "blue") {
    mood = "moody";
  }
  else {
     mood = "undefined";
  }
  messageP.innerHTML = 'You choose ${color} so you are ${mood}';

}