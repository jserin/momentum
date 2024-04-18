const images = [
    "1.png", "2.png", "3.png", "4.png", "5.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 태그 생성, 속성 추가
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// html body에 이미지 추가
document.body.appendChild(bgImage);