document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#startBtn').addEventListener('click', function() {
        if (document.getElementById('startBtn').innerHTML == "START") {
            document.getElementById('startBtn').innerHTML = "PAUSE";
            time("START");
        } else {
            document.getElementById('startBtn').innerHTML = "START";
            time("PAUSE");
        }
    });
});
let secCount = 60;
let mintCount = 1;
let intervel;
function time(status){
    if(status.toLowerCase() === "start"){
         intervel = setInterval(function () {
            secCount = secCount+1;
            // secCount = secCount/60;
            if (mintCount > 24) {
                // stop the intervel
                clearIntervel(clearIntervel);
                // zero the count of time
                document.getElementById('mint').innerHTML = "00"+":";
                document.getElementById('second').innerHTML = "00";
            }
            if (secCount > 60 ) {
                secCount = 1;
                mintCount = mintCount + 1
                if (mintCount.toString().length === 1) {
                    document.getElementById('mint').innerHTML ="0" + mintCount.toString()+":";
                } else {
                    document.getElementById('mint').innerHTML =mintCount.toString()+":";
                }
            } else {
                if (secCount.toString().length === 1) {
                    document.getElementById('second').innerHTML = "0"+secCount.toString();
                } else {
                    document.getElementById('second').innerHTML = secCount.toString();
                }
            }
        },1000)    
    } else {
        clearIntervel(clearIntervel);
    }
}

function clearIntervel(){
    clearInterval(intervel);
}