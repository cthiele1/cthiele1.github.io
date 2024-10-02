// Function to show the images when the window loads
window.onload = ShowImages;

function ShowImages() {
  const container = document.getElementById("img-background");
  Array.forEach((item, index) => {
    const ImageDiv = document.createElement("div"); //Creates a div//
    ImageDiv.classList.add("image-block");
    ImageDiv.addEventListener("click", () => {
      //When the imageDiv is clicked it will show the title and the subititle//
      showInfo(item.title, item.subtitle);
    });

    const img = document.createElement("img"); //Shows images based on src and main titl
    img.src = item.src;
    img.title = item.title;
    ImageDiv.appendChild(img); //Div holds the image
    container.appendChild(ImageDiv); //Container holds the divs//
  });
}

// When an image is clicked, the information including the title and the description will be shown
function showInfo(title, subtitle) {
  document.getElementById("image-title").textContent = title;
  document.getElementById("image-subtitle").textContent = subtitle;
}

//Main Array with each different picture//
const Array = [
  {
    src: "images/birthday.jpg",
    title: "Birthday Party!",
    subtitle: "Look I'm wearing my birthday hat!",
  },
  {
    src: "images/clown.jpg",
    title: "Bow Tie!",
    subtitle: "Look I'm wearing a bow tie!",
  },
  {
    src: "images/rain.jpg",
    title: "It's Raining :(",
    subtitle: "Look it's me, standing under an umbrella",
  },
  {
    src: "images/read.jpg",
    title: "Book!",
    subtitle: "Look I'm reading a book",
  },
  {
    src: "images/shovel.jpg",
    title: "Holding a shovel!",
    subtitle: "Look I'm holding a shovel",
  },
  {
    src: "images/work.jpg",
    title: "Laptop!",
    subtitle: "Look I'm using a laptop!",
  },
];
