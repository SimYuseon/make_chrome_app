const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenInmage = images[Math.floor(Math.random() * (images.length - 1))];

console.log(chosenInmage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenInmage}`;

document.body.appendChild(bgImage);
