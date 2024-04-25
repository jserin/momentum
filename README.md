>  # MOMENTUM
> - 크롬앱 'Momentum' 클론
> - 시계, 로그인, Todo List, 현재위치&날씨, 오늘의 명언 기능
> - Unsplash API, Quotable API, OpenWeatherMap API 사용
> 
> ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

---
### 화면 및 기능
![image](https://github.com/jserin/momentum/assets/126732429/9b6883ab-2a35-482b-a9e7-3c659caaa57b)
#### 배경화면
```JavaScript
const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}`;
const savedBg = JSON.parse(localStorage.getItem("background"));
const today = new Date();

function onLoad() {
    if(savedBg === null || savedBg.date !== today.getDate()) {
        fetch(unsplashUrl).then((response) => response.json())
        .then((data) => {
            const newBg = {
                img: data.urls.raw,
                date: today.getDate(),
            }
            localStorage.setItem("background", JSON.stringify(newBg));
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
```
- Unsplash API의 random 이미지 표시
- object의 형태로 localStorage에 저장하여 날짜가 바뀌면 배경 랜덤 변경
- quotable Api를 사용한 오늘의 명언 표시 기능도 방법 동일

### 
![image](https://github.com/jserin/momentum/assets/126732429/82fca3e4-8e93-4442-a6d1-d56d8d127134)
![image](https://github.com/jserin/momentum/assets/126732429/731d47f6-c262-42cb-bb8d-72b60e26e48c)
![image](https://github.com/jserin/momentum/assets/126732429/fe908014-b876-44b3-a97c-a33d8b43e131)
