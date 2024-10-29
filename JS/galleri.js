let container = document.getElementById("mainSection");

let images = [
  "../assets/image1.jpg",
  "../assets/image2.jpg",
  "../assets/image3.jpg",
];

let index = 0;

let imageTag = document.createElement("img");
imageTag.src = images[index];

let buttonLeft = document.createElement("button");
let buttonRight = document.createElement("button");

buttonLeft.addEventListener("click", () => decrement());
buttonRight.addEventListener("click", () => increment());
buttonLeft.innerText = "<";
buttonRight.innerText = ">";

container.append(buttonLeft);
container.append(imageTag);
container.append(buttonRight);

function decrement() {
  if (index > 0) {
    index -= 1;
  } else {
    index = images.length - 1;
  }
  imageTag.src = images[index];
}

function increment() {
  if (index < images.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  imageTag.src = images[index];
}
