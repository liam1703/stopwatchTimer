let seconds = 00;
let minutes = 00;
let hours = 00;

let placeholderSeconds = 0;
let placeholderMinutes = 0;
let placeholderHours = 0;

let status = "stopped";

let interval;

function stopWatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds<10){
        placeholderSeconds = `0${seconds}`;
    } else{
        placeholderSeconds=seconds;
    }

    if(minutes<10){
        placeholderMinutes = `0${minutes}`;
    } else{
        placeholderMinutes=minutes;
    }

    if(hours<10){
        placeholderHours = `0${hours}`;
    } else{
        placeholderHours=hours;
    }


    document.getElementById("clock").innerHTML =`${placeholderHours}:${placeholderMinutes}:${placeholderSeconds}`;

}

const start = document.querySelector(".start");
start.addEventListener('click', startStop);


const resetB = document.querySelector("#reset");
resetB.addEventListener('click', reset);
//window.setInterval(stopWatch, 1000)



function startStop(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        status = "started";
    } else {
        window.clearInterval(interval);
        status = "stopped";
    }
} 


function reset(){
    window.clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("clock").innerHTML = "00:00:00";
}