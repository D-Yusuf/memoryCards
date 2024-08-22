const cardsData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
      isSelected: false,
      id: 1,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
      isSelected: false,
      id: 2,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      name: "Java",
      isSelected: false,
      id: 3,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      name: "C#",
      isSelected: false,
      id: 4,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      name: "Ruby",
      isSelected: false,
      id: 5,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      name: "Go",
      isSelected: false,
      id: 6,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
      isSelected: false,
      id: 7,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
      isSelected: false,
      id: 8,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      name: "Java",
      isSelected: false,
      id: 9,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      name: "C#",
      isSelected: false,
      id: 10,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      name: "Ruby",
      isSelected: false,
      id: 11,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      name: "Go",
      isSelected: false,
      id: 12,
    },
  ];
function shuffle(array) {
let currentIndex = array.length;

// While there remain elements to shuffle...
while (currentIndex !== 0) {

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
  