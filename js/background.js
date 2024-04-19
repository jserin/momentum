const UNSPLASH_API_KEY = "OUAZ1zkJ1dCgvmmDOoebDJRUbla5g2iOOcl0m3_0UGY";
const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}`;

const savedBg = JSON.parse(localStorage.getItem("background"))[0];
const today = new Date();

function onLoad() {
    if(savedBg === null || savedBg.date !== today.getDate()) {
        fetch(unsplashUrl).then((response) => response.json())
        .then((data) => {
            const newBg = {
                img: data.urls.raw,
                date: today.getDate(),
            }
            localStorage.setItem("background", JSON.stringify(todaysBg));
            paintBg(newBg.img);
    });
    } else {
        paintBg(savedBg.img);
    }
}

function paintBg(url) {
    const bgImage = document.createElement("img");
    bgImage.src = url;
    document.body.appendChild(bgImage);
}

window.addEventListener("load", onLoad);