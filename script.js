var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubbles() {
    var clutter = "";

for(var i=1; i<=176; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

// ----------------------------------------------------js for timer---------------------

function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Time Over</h1>"

        }
    }, 1000);
}

// ---------------------------------------increase Score-----------------

function increaseScore () {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// -------------------------------------------js for new hit --------------------------------------

function getNewHit () {
    //getting random number
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
    else{
        document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
    }
    
})


makeBubbles();
runTimer();
getNewHit();
