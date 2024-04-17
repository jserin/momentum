const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const currentColor = h1.style.color;
    // let newColor;
    // if (currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
    
    // toggle 사용 전
    // const clickedClass = "active";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    // toggle 사용
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);