//Parsing JSON FILE
async function getIceCreams() {
  const response = await fetch(
    "https://portiaportia.github.io/json/ice-creams.json"
  );
  const info = await response.json();

  ShowIceCreams(info);
}

function ShowIceCreams(iceCreams) {
  const container = document.getElementById("container");
  iceCreams.forEach((iceCream) => {
    //Arrow functions
    const div = document.createElement("div");
    div.classList.add("ice-cream");
    //Gathering images from github
    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;

    const stack = document.createElement("div");
    stack.classList.add("stack");
    stack.innerText = iceCream.name;

    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(stack);
  });
}
//Shows imgages on screen
window.onload = getIceCreams;
