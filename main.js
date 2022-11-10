let [millisec, sec, min, hour] = [0, 0, 0, 0];

let timerRef = document.getElementById('timer')

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

let int = null;

// setting actions for buttons
buttonStart.addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(int);
});

buttonReset.addEventListener('click', () => {
    clearInterval(int);
    [millisec, sec, min, hour] = [0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});

// start button function
function displayTimer() {
    millisec += 10;

    if (millisec == 1000) {
        millisec = 0;
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;

            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;


    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}