const quotes = [
    {
        quote: "믿음은 거짓보다 더 위험한 진실의 적이다.",
        author: "프레드리히 니체",
    },
    {
        quote: "우리는 앞으로 2년 뒤에 닥쳐올 변화에 대해서는 과대평가하지만 10년 뒤에 올 변화는 과소평가하는 경향이 있다. 그렇다고 스스로를 나태함으로 이끌지는 마라.",
        author: "빌 게이츠",
    },
    {
        quote: "힘은 육체적인 역량에서 나오지 않는다. 그것은 불굴의 의지에서 나온다.",
        author: "마하트마 간디",
    },
    {
        quote: "기억력이 좋지 않은 사람은 거짓말을 해선 안 된다.",
        author: "미셸 드 몽테뉴",
    },
    {
        quote: "재능은 게임에서 이기게 한다. 그러나 팀워크는 우승을 가져온다.",
        author: "마이클 조던",
    },
    {
        quote: "근면과 기술로 불가능한 것은 거의 없다. 위대한 작품은 힘이 아닌, 인내로 일궈진다.",
        author: "사무엘 존슨",
    },
    {
        quote: "약간의 광기를 띠지 않은 위대한 천재란 없다.",
        author: "세네카",
    },
    {
        quote: "신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
        author: "마더 테레사",
    },
    {
        quote: "실천이 말보다 낫다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "어진 사람을 보면 그와 같이 되기를 생각하고, 어질지 않은 사람을 보면 속으로 스스로 반성하라.",
        author: "공자",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;