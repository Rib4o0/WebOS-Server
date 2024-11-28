let time = null;
let initTime = 0;

const timeDisplay = document.createElement("div");
const progressBar = document.createElement("div");
const progress = document.createElement("div");
const inputs = document.createElement("div");
const timeInput = document.createElement("input");
const startBtn = document.createElement("button");
let windowName;

let timerRunning = false;

import { sendNotification } from "./../../window.js";

export function init(windowBody) {
    // time
    // progressbar
    // -progress
    // input
    // start
    // stop

    windowName = windowBody.parentElement.querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "Timer"

    windowBody.classList.add("timerApp")
    timeDisplay.classList.add("time")
    timeDisplay.textContent = "0:00:00";

    progressBar.classList.add("progressBar")

    progress.classList.add("progress")
    progressBar.append(progress)

    inputs.classList.add("inputs");

    timeInput.classList.add("timeInput");
    timeInput.type = "number"
    timeInput.placeholder = "Time in seconds"

    timeInput.addEventListener("input", e => {
        if (!timerRunning) {
            if (e.target.value != "") time = parseInt(e.target.value);
            else time = 0;
            initTime = time;
            updateTime()
        }
    })

    inputs.append(timeInput);

    startBtn.classList.add("startBtn")
    startBtn.textContent = "Start";

    startBtn.addEventListener("click", startTimer)

    inputs.append(startBtn);

    windowBody.append(timeDisplay);
    windowBody.append(progressBar);
    windowBody.append(inputs)
}

function updateTime() {
    let minsAndSecs = convertSeconds(time);
    timeDisplay.textContent = minsAndSecs.hours + ":" + minsAndSecs.mins + ":" + minsAndSecs.secs;
    windowName.textContent = "Timer - " + timeDisplay.textContent;
}

function convertSeconds(secs) {
    return {hours: Math.floor(secs / 3600), mins: (Math.floor(secs % 3600 / 60) < 10) ? "0" + Math.floor(secs % 3600 / 60) : Math.floor(secs % 3600 / 60), secs: (secs % 60 < 10) ? "0" + (secs % 60) : secs % 60};
}

function getTimerMessage(secs) {
    let converted =  {hours: Math.floor(secs / 3600), mins: Math.floor(secs % 3600 / 60), secs:  secs % 60};
    if (converted.hours <= 0) {
        if (converted.mins <= 0) {
            return converted.secs + " seconds";
        } else {
            return converted.mins + " minutes and " + converted.secs + " seconds";
        }
    } else {
        return converted.hours + " hours  " + converted.mins + " minutes and " + converted.secs + " seconds";
    }
}

let timerInterval;
let startTime;

function startTimer() {
    if (timerRunning) {
        timerRunning = false;
        time = 0;
        progress.style.width = "0%";
        startBtn.textContent = "Start";
        startBtn.classList.remove("stop");
        updateTime();
        clearInterval(timerInterval);
    } else if (time >= 1) {
        startBtn.textContent = "Stop";
        startBtn.classList.add("stop")
        timerRunning = true;
        startTime = time;
        progress.style.width = '100%';
        timerInterval = setInterval(() => {
            time--;
            updateTime();
            updateProgressBar();
            if (time <= 0) {
                time = 0;
                clearInterval(timerInterval);
                timerRunning = false;
                startBtn.textContent = "Start";
                startBtn.classList.remove("stop")
                let initTimeWords = getTimerMessage(initTime);
                sendNotification("Timer finished: " + initTimeWords, "Timer App")
            }
        }, 1000)
    }
}

function updateProgressBar() {
    progress.style.width = (time / startTime * 100) + "%";
}