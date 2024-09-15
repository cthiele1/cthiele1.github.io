const doStuff = () => {
  alert("Helllooo Worrlddd");
};

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
  document.getElementById("message").innerHTML = "Hello Everyone!!";
  document.getElementById("stuff").classList.add("special");
};

const myButtonTwo = document.getElementById("btn-click-two");
myButtonTwo.onclick = () => {
  document.getElementById("message-two").innerHTML = "Goodbye!!";
  document.getElementById("stuff").classList.remove("special");
};

const myButtonThree = document.getElementById("btn-click-three");
myButtonThree.onclick = () => {
  document.getElementById("message-three").innerHTML = "Hides column!!";
  document.getElementById("stuff").remove("one");
};

const myButtonFour = document.getElementById("btn-click-four");
myButtonFour.onclick = () => {
  document.getElementById("message-four").innerHTML = "Welcome Back!!";
  document.getElementById("stuff").classList.add("bounce");
};

myButton.onclick = () => {
  document.getElementById("message").innerHTML = "Hello Everyone!!";
};

const myButtonTwo = document.getElementById("btn-click-five");
myButtonTwo.onclick = () => {
  document.getElementById("message-five").innerHTML = "Goodbye!!";
  document.getElementById("stuff").classList.remove("special");
};

//Add a second button, called say goodbye
// when clicked change the text to goodbye everyone, and remove the special styles
