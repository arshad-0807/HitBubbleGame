var timer = 60;
var score = 0;
var hitrn = 0;
// life = 3;

function makeBubbles() {
    var clutter = "";

    for (var i = 1; i <= 176; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

// ----------------------------------------------------js for timer---------------------

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Time Over</h1>" + "<h1>Your Score:</h1>" + `<span>${score}</span>`;
            // document.getElementById("pbtm").innerHTML = "<h1>Game Over</h1>" ;
        }
    }, 1000);
}

// ---------------------------------------increase Score-----------------

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// -------------------------------------------js for new hit --------------------------------------

function getNewHit() {
    //getting random number
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// document.querySelector("#pbtm").addEventListener("click", function (details) {
//   var clickednum = Number(details.target.textContent);
//   life--;
//   if (clickednum === hitrn) {
//     increaseScore();
//     makeBubbles();
//     getNewHit();

//   } 
//   else if (life<=0){
//     document.getElementById("pbtm").innerHTML ="<h1>Game Over</h1>" +  "<h1>Your Score:</h1>" + `<span>${score}</span>`;
//     document.getElementById("pbtm").style.flexDirection = "column"
//   } 

// });

// document.querySelector("#pbtm").addEventListener("click", function (details) {
//     var clickednum = Number(details.target.textContent);
//     var life ="";

//     if(clickednum === hitrn){
//         increaseScore();
//         makeBubbles();
//         getNewHit();
//     }
//     else if (clickednum !== hitrn){
//         document.getElementById("1").style.display = "none"
//         makeBubbles()
//         getNewHit()
//         life = true;
//     }
//     else if(clickednum !== hitrn && life == true) {
//         document.getElementById("2").style.display = "none"
//         makeBubbles()
//         getNewHit()
//         life = false;
//     }
//     else if(clickednum !== hitrn && life != true) {
//         document.getElementById("3").style.display = "none"
//         document.getElementById("pbtm").innerHTML ="<h1>Game Over</h1>" +  "<h1>Your Score:</h1>" + `<span>${score}</span>`;
//         document.getElementById("pbtm").style.flexDirection = "column"
//     }
// });
// ----------------------------------------------------------------------------------------------------

// var life = false; // Initialize life outside the event listener to maintain its state
 // A variable to count remaining lives, assuming the user has 2 chances

//  ----------------------------MAIN CODE STARTS HERE_________________________

//  var lifeCount = 3;
// document.querySelector("#pbtm").addEventListener("click", function (details) {
//     var clickednum = Number(details.target.textContent);

//     if (clickednum === hitrn) {
//         increaseScore();
//         makeBubbles();
//         getNewHit();
//     } else {
//         lifeCount--; 
//         if (lifeCount === 2) {
//             document.getElementById("1").style.display = "none";
//             makeBubbles();
//             getNewHit();
//         } else if (lifeCount === 1) {
//             document.getElementById("2").style.display = "none";
//             makeBubbles();
//             getNewHit();
//         } 
//         else if (lifeCount === 0) {
//             document.getElementById("3").style.display = "none";
//             document.getElementById("pbtm").innerHTML = "<h1>Game Over</h1>" + "<h1>Your Score:</h1>" + `<span>${score}</span>`;
//             document.getElementById("pbtm").style.flexDirection = "column";
//         }
        
//     }
// });

// -----------------------------------------------MAIN CODE ENDS HERE----------------------------

var lifeCount = 3;
document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);

    if(clickednum === hitrn){
        increaseScore()
        makeBubbles()
        getNewHit()
    }
    else{
        lifeCount--;
        if(lifeCount === 2) {
            document.getElementById("1").style.display = "none";
            makeBubbles();
            getNewHit();
        }
        else if(lifeCount === 1) {
            document.getElementById("2").style.display = "none"
            makeBubbles()
            getNewHit();
        }
        else if (lifeCount === 0){
            document.getElementById("3").style.display = "none";
            document.getElementById("pbtm").innerHTML = "<h1>GAME OVER</h1>" + "<h2>YOUR SCORE</h2>" + `<span>${score}</span>`
            document.getElementById("pbtm").style.flexDirection = "column"
        }
    }
})


makeBubbles();
runTimer();
getNewHit();
