let count = 0;

function incrementCount() {
  count++;
  document.getElementById("countValue").innerHTML = count;
}

function refreshImage() {
  document.getElementById("randomImage").src =
    "https://picsum.photos/200?random=" + new Date().getTime();
}
function moveBox() {
  let sliderValue = document.getElementById("slider").value;
  let box = document.getElementById("slider-box");
  box.style.left = sliderValue + "%";
}
