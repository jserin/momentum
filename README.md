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

### login + Todo List
![image](https://github.com/jserin/momentum/assets/126732429/731d47f6-c262-42cb-bb8d-72b60e26e48c)
```JavaScript
// greetings.js
...
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    paintTodoInput();
}
...
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreetings(username);
    paintTodoInput();
}
...
```
- localStorage에 username이 없을 때 로그인할 수 있는 input 표시
- username 있는 경우 환영 문구와 todo list 표시

```JavaScript
...
function handleToDoSubmet(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);

    paintToDo(newTodoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    // 삭제 후 새로운 배열이 만들어졌으니까 다시 로컬저장소에 저장
    saveToDos();
}
...
```
![image](https://github.com/jserin/momentum/assets/126732429/fe908014-b876-44b3-a97c-a33d8b43e131)
- 각 todo가 고유의 아이디를 가질 수 있도록 배열의 형태로 localStorage에 저장
- todo 생성시 문자열만 저장되는 localStorage에 알맞게 형 변환
- todo 삭제시 해당하는 todo를 제외하고 새로운 배열을 생성하여 저장. filter 사용

#### 날씨 및 장소
![image](https://github.com/jserin/momentum/assets/126732429/82fca3e4-8e93-4442-a6d1-d56d8d127134)
```JavaScript
/// weather.js
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather div:first-child");
            const city = document.querySelector("#weather div:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
    });
}
function onGeoErr() {
    alert("Can't find you. No weather.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
```
- 장치의 위치 정보를 반환하는 navigator.geolocation 사용
- 위도와 경도를 사용하여 현재 위치의 날씨 정보 표시

---
### 추가(할 수도 있는) 기능
- TodoList의 체크박스와 완료된 리스트 조회
