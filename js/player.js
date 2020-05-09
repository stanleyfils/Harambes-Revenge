//this js file holds the character movements 
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// document.onkeydown = function (event) {
//   // console.log(event);

//   // use keycode.info to determine keystroke values
//   switch(event.keyCode){
//       case 37: // left
//       mainCharX -= 20;
//       // this gves character the ability to disappear at far left of screen and appear on right side
//       if(mainCharX < -25) {
//         mainCharX = 1305
//       }
//       break;

//       case 39: // right
//       mainCharX += 20;
//       // this gves character the ability to disappear at far right of screen and appear on left side
//       if(mainCharX > 1305) { 
//         mainCharX = -25
//       }
//       break;


//     // I don't need these cases because I don't want my character moving up or down yet
//       // case 38: // up 
//       // mainCharY -= 20;
//       // break;

//       // case 40: // down
//       // mainCharY += 20;
//       // break;

//       default:
//       console.log("I'm not sure what you're doing!");
//   }
// };

// let health = document.getElementById("health")
// // health.value -= 50; only on collision 