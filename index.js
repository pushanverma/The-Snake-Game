// game constansts & variables

let direction ={x:0 ,y:0};
let foodSound=new Audio('music/food.mp3');
let gameOverSound=new Audio('music/gameover.mp3');
let moveSound=new Audio('music/move.mp3');
let musicSound =new Audio('music/music.mp3');
let speed =2; 
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

// game functions

//   ctime -current time
// game loops :  instead of set intervals we use requestAnimationFrame 

function main(ctime)
{
    window.requestAnimationFrame(main);
   if((ctime-lastPaintTime)/1000 < 1/speed);    //jab tak for eg. speed =2 , then it will not print screen until 0.5 seconds
 {
    return;
 }   
 lastPaintTime =ctime;
 gameEngine();
}

function gameEngine()
{
    // Part 1: updating the snake array
     

    // Part 2: Display the snake and food
    board.innerHTML="";  //before begining anything the board must be empty 
    //  e is event and index and for each loop is applied bcz as snake will eat each by each it will add to snake 
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart =e.y;
        snakeElement.style.gridCOlumnStart =e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}


// logic starts here
// window.requestAnimationFrame(main);
