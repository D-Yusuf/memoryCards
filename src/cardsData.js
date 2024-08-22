const cardsData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      name: "Java",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      name: "C#",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      name: "Ruby",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      name: "Go",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      name: "Java",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      name: "C#",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      name: "Ruby",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      name: "Go",
    },
  ];
function shuffle(array) {
let currentIndex = array.length;

// While there remain elements to shuffle...
while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
}
}
shuffle(cardsData);
  export default cardsData;
  