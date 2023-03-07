let music = new Audio("assets/music.mp3");
let move = new Audio("assets/ting.mp3");
let gameOver = new Audio("assets/gameover.mp3");

let turn = "X";
let isGameOver = false;

const changeTurn = () => {
  if (turn === "X") {
    return (turn = "0");
  } else {
    return (turn = "X");
  }
};

  



const isWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML &&
      boxTexts[e[2]].innerHTML === boxTexts[e[1]].innerHTML &&
      boxTexts[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won!";
      isGameOver = true;
      gameOver.play()
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '206px'
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      move.play();
      isWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "It's " + turn + " Turn's";
      }
    }
  });
});

let boxTexts = document.getElementsByClassName("boxText");
let btn = document.getElementById('reset')
btn.addEventListener('click',()=> {
    boxTexts[0].innerHTML = ""
    boxTexts[1].innerHTML = ""
    boxTexts[2].innerHTML = ""
    boxTexts[3].innerHTML = ""
    boxTexts[4].innerHTML = ""
    boxTexts[5].innerHTML = ""
    boxTexts[6].innerHTML = ""
    boxTexts[7].innerHTML = ""
    boxTexts[8].innerHTML = ""
    turn = 'X'
    isGameOver = false
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector(".info").innerText = "It's X Turn's"

})