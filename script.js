var i = 0; //output

document.getElementById("incBtn").addEventListener("click", increase); //increase button
document.getElementById("decBtn").addEventListener("click", decrease); //decrease button
document.getElementById("resBtn").addEventListener("click", reset);    //reset button


function increase () {
    document.getElementById("count").value = i+=1;
    if (i % 2 == 0 ) {
        var n = document.getElementById("count").value;
        document.querySelector("h2").innerHTML =  n + " is an Even number";
        document.querySelector("h2").style.color = "green";
    } else {
        var n = document.getElementById("count").value;
        document.querySelector("h2").innerHTML =  n + " is an Odd number";
        document.querySelector("h2").style.color = "red";
    }
}

function decrease() {   
    document.getElementById("count").value = i-=1;
    if (i % 2 == 0) {
        var n = document.getElementById("count").value;
        document.querySelector("h2").innerHTML =  n + " is an Even number";
        document.querySelector("h2").style.color = "green";
    } else { 
        var n = document.getElementById("count").value;
        document.querySelector("h2").innerHTML =  n + " is an Odd number";
        document.querySelector("h2").style.color = "red";
    }
}

function reset() {
    window.location.reload();
}











    



