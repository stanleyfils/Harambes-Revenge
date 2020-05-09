const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = 1260;
myCanvas.height = 600;

let score = 0;
let isOver = false;

//monkey image
const mainCharMonkey = new Image();
mainCharMonkey.src = "./images/Walking/Walking_000.png";
let mainCharMonkeyX = 525;
let mainCharMonkeyY = 0;

//image of little boy sprites
const mainChar = new Image();
mainChar.src = "./images/mainCharactercopy.png"; // add animation
let mainCharX = 700;
let mainCharY = 520;

//barrel hurts player by half 
const obstacleImgBarrel = new Image();
obstacleImgBarrel.src = './images/barrel.webp';
let obstacleBarrelX = 600; 
let obstacleBarrelY = 0;

const obstacleImgBarrel2 = new Image();
obstacleImgBarrel2.src = './images/barrel.webp';
let obstacleBarrel2X = 900; 
let obstacleBarrel2Y = 0;

// Fireball obstacle. instantly kills player.
const obstacleImgFireball = new Image();
obstacleImgFireball.src = './images/fireball.png';
let obstacleFireballX = 300;
let obstacleFireballY = 0;

// animal control truck obstacle. Collect these to strike Harambe.
const obstacleImgTruck = new Image();
obstacleImgTruck.src = './images/animalcontrol.png';
let obstacleTruckX = 400;
let obstacleTruckY = 0;

//power-up obstacle
const obstacleImgFirstaid = new Image();
obstacleImgFirstaid.src = './images/4loco.png';
let obstacleFirstaidX = 300;
let obstacleFirstaidY = 0;

//Harambe's animal control truck
const animalControl = new Image();
animalControl.src = "./images/animalcontrol.png"
let animalControlX = 0;
let animalControlY = 30;

function drawImg(name, pathToImg, x, y, w, h) {
    name = new Image();
    name.src = pathToImg;
        ctx.drawImage(name, x, y, w, h);
}


function drawEverything() {
  drawImg(mainCharMonkey, "./images/Walking/Walking_000.png", mainCharMonkeyX, mainCharMonkeyY, 250, 150);
  drawImg(mainChar, "./images/mainCharactercopy.png", mainCharX, mainCharY,50, 70);
  drawImg(obstacleImgBarrel, "./images/barrel.webp", obstacleBarrelX, obstacleBarrelY, 50, 70);
  drawImg(obstacleImgFireball, "./images/fireball.png", obstacleFireballX, obstacleFireballY, 50, 100);
  drawImg(obstacleImgTruck, "./images/animalcontrol.png", obstacleTruckX, obstacleTruckY, 75, 50);
  drawImg(obstacleImgFirstaid, "./images/4loco.png", obstacleFirstaidX, obstacleFirstaidY, 35,75);
  drawImg(obstacleImgBarrel2, "./images/barrel.webp", obstacleBarrel2X, obstacleBarrel2Y, 50, 70);

    
    if (checkContact(mainCharY, obstacleBarrelY, mainCharX, obstacleBarrelX)) {
        // alert("Ouch! That Hurt!!");
        gameOver();
    }
    
    if (checkContact(mainCharY, obstacleBarrel2Y, mainCharX, obstacleBarrel2X)) {
        // alert("Ouch! That Hurt!!");
        gameOver();
    }

    if (checkContact(mainCharY, obstacleFireballY + 18, mainCharX + 5, obstacleFireballX)) {
      // alert("Ouch! That hurt!!");
      gameOver();
    }
    
    if (checkContact(mainCharY, obstacleTruckY + 1, mainCharX + 5, obstacleTruckX)) {
      // alert("GAME OVER!");
      // gameOver();
      // Time.timeScale = 0;
      drawImg(animalControl, "./images/animalcontrol.png", animalControlX, animalControlY, 130, 100);
      animalControlX+=9;
    

      if (checkContact(mainCharMonkeyY, animalControlY, mainCharMonkeyX, animalControlX)) {
        // alert("Ouch! That Hurt!!");
        // youWin();
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
        animalControlX = 0;
        // ctx.clearRect(1400,650);
        // reset();
    }

    }

    

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Must add health function first!
    // if (checkContact(mainCharY, obstacleFirstaidY, mainCharX, obstacleFirstaidX)) {
    //   // alert("GAME OVER!");
    //   // gameOver();
    //     // score++;
    //     // document.getElementById('score').innerHTML = "Score: "+ score;
    // }

    // if (obstacleBarrelY === 0){
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }


    //only show animal control truck if main character collects truck obstacle. Add 1 point when truck collides with Harambe.
    
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

}

        
function drawingLoop() {
    ctx.clearRect(0, 0, 1400, 650);

    obstacleBarrelY += 6;
    obstacleBarrel2Y += 5;
    obstacleFireballY += 3.5;
    obstacleTruckY += 2.2;
    obstacleFirstaidY += 2;

 
    if (obstacleBarrelY > 600) {
        obstacleBarrelY = 0;
        obstacleBarrelX = Math.floor(Math.random() * 1300);
    }
    
    if (obstacleBarrel2Y > 600) {
        obstacleBarrel2Y = 0;
        obstacleBarrel2X = Math.floor(Math.random() * 1300);
    }

    if (obstacleFireballY > 600) {
      obstacleFireballY = 0;
      obstacleFireballX = Math.floor(Math.random() * 1300);
    }
   
    // if (obstacleFireballY > 600) {
    //   obstacleFireballY = 0;
    //   obstacleFireballX = Math.floor(Math.random() * 1300);
    // }

    // use setInterval to delay power-up and animal control truck appearance 
    if (obstacleFirstaidY > 600) {
      obstacleFirstaidY  = 0;
      obstacleFirstaidX = Math.floor(Math.random() * 1300);
    }

    if (obstacleTruckY > 600) {
      obstacleTruckY = 0;
      obstacleTruckX = Math.floor(Math.random() * 1300);
    }
    
    
    drawEverything();
    
    if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    }  
    checkStatus();
    
};

function checkStatus(){
console.log("Check Status being called")
    if(score >= 3){
    youWin();
    }
}

document.onkeydown = function (event) {
    switch(event.keyCode){
      case 37: // left
      mainCharX -= 20;
      // this gves character the ability to disappear at far left of screen and appear on right side
      if(mainCharX < -25) {
        mainCharX = 1305
      }
      break;
  
      case 39: // right
      mainCharX += 20;
      // this gves character the ability to disappear at far right of screen and appear on left side
      if(mainCharX > 1305) { 
      mainCharX = -25
      }
      break;
      }
    };
    


function checkContact(mainCharY, obstacleBarrelY, mainCharX, obstacleBarrelX){
  //mainCharY <= obstacleBarrelY + (height of barrel)
return mainCharY <= obstacleBarrelY + 60
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& mainCharX >= obstacleBarrelX
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& mainCharX <= obstacleBarrelX + 50
};

function checkContact2(mainCharY, obstacleBarrel2Y, mainCharX, obstacleBarrelX){
  //mainCharY <= obstacleBarrelY + (height of barrel)
return mainCharY <= obstacleBarrel2Y + 60
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& mainCharX >= obstacleBarrel2X
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& mainCharX <= obstacleBarrel2X + 50
};



function checkContactMonkey(mainCharY, mainCharMonkeyY, mainCharX, mainCharMonkeyX){
  //mainCharY <= obstacleBarrelY + (height of barrel)
return animalControlY <= mainCharMonkeyY + 150
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& animalControlX >= mainCharMonkeyX
  //mainCharX <= obstacleBarrelX + (width of barrel)
&& animalControlX <= mainCharMonkeyX + 250
};


  


function gameOver(){
    ctx.clearRect(0, 0, 1400, 650);

    isOver = true;

    ctx.font = "70px bold Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Ouch! That hurt!!", 450, 350);
};

function youWin(){
    ctx.clearRect(0, 0, 1400, 650);

    ctx.font = "70px bold Arial";
    ctx.fillStyle = "orange";
    ctx.fillText("You Survived!!", 500, 350);
};

drawingLoop();