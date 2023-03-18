//let turn="x";

// let x ="x";
// let y ="0";

// if(x == "x"){
//     document.write("x");
// }else{
//   document.write("0");
// };



let turn="x";
let gameover = false;
let isblank = false;

// let x ="x";
// let y ="0";

// if(x == "x"){
//     document.write("x");
// }else{
//   document.write("0");
// };


const changeTurn = ()=>{
    return turn === "x"? "0": "x"
   }

let boxes = document.getElementsByClassName("box");
  for(let i=0; i<boxes.length; i++){
    let element = boxes[i];
    let textbox = element.querySelector(".textbox");
    element.addEventListener("click", ()=>{
              if (textbox.innerText === '' && !gameover){
                  textbox.innerText = turn;
                  if(turn == "x"){
                    textbox.style.color = "lawngreen"
                  }else{
                  textbox.style.color = "eqva"
                  }
                  checkWin();
                  if (!gameover){
                     turn = changeTurn();
                    document.getElementById("info").innerText = "Turn ="+" " +turn;
                  }else {
                    document.getElementById("info").innerText = turn + " is Winner";
                  }
                  if (!gameover && !textbox.innerText == isblank){
                    document.getElementById("info").innerText = "Game Tie";
                  }
               }
    }) 
  }
  

  const checkWin = ()=>{
    let textbox = document.getElementsByClassName("textbox");
    let wins =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6], 
      [1,4,7], 
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
     for(let i= 0; i<wins.length; i++){
       let m= wins[i];
       if((textbox[m[0]].innerText === textbox[m[1]].innerText) && (textbox[m[2]].innerText === textbox[m[1]].innerText) && textbox[m[0]].innerText !== '' ){
                  document.getElementById("info").inneText = textbox[m[0]].innerText +"won"
                  gameover = true
                  break;
                  };      
     }
     for(let i = 0; i<textbox.length; i++){
      let m= textbox[i];
      if(!m.innerText){
        isblank = true
        return;
      }else{
        isblank = false
      }    
    }    
  }

  function reset(){
    let textboxs = document.querySelectorAll(".textbox");
     for(let i=0; i<textboxs.length; i++){
      let elements = textboxs[i];
      elements.innerText = ""
    };
    turn = "x";
    gameover = false
       document.getElementById("info").innerText = "Turn ="+" " +turn; 
  }