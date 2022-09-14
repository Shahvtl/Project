window.onload = function(){
    var mins =00;
    var seconds = 00;
    var tens = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var OutputMins =document.getElementById('mins')
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        mins = "00";
        tens = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
        OutputMins.innerHTML = mins;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
          mins++;
          OutputMins.innerHTML = '0' + mins;
          seconds = 0;
          OutputSeconds.innerHTML = '0' + 0;
         }

        if(mins > 9){
         OutputSeconds.innerHTML = mins;
         }
    }
}