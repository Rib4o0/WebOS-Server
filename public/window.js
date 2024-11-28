const desktop = document.querySelector(".desktop")
const clock = document.querySelector(".clock")
const clockTime = clock.querySelector(".time");
const clockDate = clock.querySelector(".date");

// import {consoleLog} from "./windowApps/console/console.js"

function updateClock() {
    const now = new Date();

    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const secondsSinceMidnight = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // Combine them into a time string
    const time = `${hours}:${minutes}:${seconds}`;

    // Display the time
    clockTime.textContent = time;
    clockDate.textContent = now.toDateString();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();


let mouseX = 0;
let mouseY = 0;

const downloadedApps = [
    "timer",
    "appStore"
];

let openApps = [];
let openWindows = [];

function loadApps() {
    for (let app of downloadedApps) {
        const newApp = document.createElement("div");
        newApp.classList.add("app");
        newApp.dataset.app = app;
        const appImg = document.createElement("img");
        appImg.src = `/apps/${app}/${app}.png`
        newApp.appendChild(appImg)
        document.querySelector(".taskbar").appendChild(newApp)
    }


    document.querySelectorAll(".app").forEach(app => {
        app.addEventListener("click", async () => {
            if (!openApps.includes(app.dataset.app)) {
                let openedAppWindow = await createWindow("New Window", app.dataset.app)
                openApps.push(app.dataset.app);
                openWindows.push({appName: app.dataset.app, appWindow: openedAppWindow})
                app.classList.add("open");
            } else {
                for (let appWindow of openWindows) {
                    if (appWindow.appName == app.dataset.app) 
                        {
                            appWindow.appWindow.classList.remove("minimized")
                            appWindow.appWindow.style.zIndex = openWindows.length + 100;
                            let windowElements = document.querySelectorAll(".window");
                            windowElements.forEach(win => {
                                win.style.zIndex = parseInt(win.style.zIndex) - 1;
                            })
                        }
                }
            }
        })
    })
}

loadApps();

async function createWindow(name, appName = "calculator") {
    const windowElement = document.createElement("div");
    const moveBar = document.createElement("div");
    const windowName = document.createElement("div");
    const btnBox = document.createElement("div");
    const closeBtn = document.createElement("div");
    const fullScreenBtn = document.createElement("div"); 
    const minimizeBtn = document.createElement("div");
    const windowBody = document.createElement("div")

    windowElement.classList.add("window");
    moveBar.classList.add("moveBar");
    windowName.classList.add("windowName");
    btnBox.classList.add("btnBox");
    closeBtn.classList.add("closeBtn")
    fullScreenBtn.classList.add("fullScreenBtn");
    minimizeBtn.classList.add("minimizeBtn");
    windowBody.classList.add("windowBody");

    windowName.textContent = name;
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    fullScreenBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`
    minimizeBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`

    btnBox.append(fullScreenBtn)
    btnBox.append(minimizeBtn)
    btnBox.append(closeBtn);
    moveBar.append(windowName);
    moveBar.append(btnBox)
    windowElement.append(moveBar);
    windowElement.append(windowBody)
    
    let moveInterval;

    windowElement.style.zIndex = openWindows.length + 100;
    let windowElements = document.querySelectorAll(".window");
    windowElements.forEach(win => {
        win.style.zIndex = parseInt(win.style.zIndex) - 1;
    })

    windowElement.addEventListener("click", () => {
        if (windowElement.classList.contains("fullScreen")) windowElement.style.zIndex = 1003;
        else windowElement.style.zIndex = openWindows.length + 100;
        let windowElements = document.querySelectorAll(".window");
        windowElements.forEach(win => {
            win.style.zIndex = parseInt(win.style.zIndex) - 1;
        })
    })

    moveBar.addEventListener("mousedown", () => {
        let offsetY = windowElement.getBoundingClientRect().top - mouseY;
        let offsetX = windowElement.getBoundingClientRect().left - mouseX;
        moveInterval = setInterval(() => {
            windowElement.style.top = (mouseY + offsetY) + "px";
            windowElement.style.left = (mouseX + offsetX) + "px";
        })
    })

    window.addEventListener("mouseup", () => {
        clearInterval(moveInterval)
    })

    fullScreenBtn.addEventListener("click", () => {
        windowElement.classList.toggle("fullScreen")
        if (windowElement.classList.contains("fullScreen")) {
            windowElement.dataset.prevTop = windowElement.style.top;
            windowElement.dataset.prevLeft = windowElement.style.left;
            windowElement.style.top = "0px";
            windowElement.style.left = "0px";

            windowElement.dataset.prevWidth = windowElement.style.width;
            windowElement.dataset.prevHeight = windowElement.style.height;
            windowElement.style.width = "100%";
            windowElement.style.height = "100%";
            windowElement.style.zIndex = 1002;
        } else {
            windowElement.style.top = windowElement.dataset.prevTop;
            windowElement.style.left = windowElement.dataset.prevLeft;
            windowElement.style.width = windowElement.dataset.prevWidth
            windowElement.style.height = windowElement.dataset.prevHeight;
            appWindow.appWindow.style.zIndex = openWindows.length + 100;
            let windowElements = document.querySelectorAll(".window");
            windowElements.forEach(win => {
                win.style.zIndex = parseInt(win.style.zIndex) - 1;
            })
        }

    })

    minimizeBtn.addEventListener("click", () => {
        windowElement.classList.add("minimized")
    })

    closeBtn.addEventListener("click", () => {
        document.querySelector(`[data-app="${appName}"]`).classList.remove("open");
        openApps.splice(openApps.indexOf(appName), 1)
        windowElement.remove();
    })

    try {
        const app = await import(`/apps/${appName}/${appName}.js`);

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/apps/${appName}/${appName}.css`
        document.head.appendChild(link)

        if (app.init(windowBody)) {
            app.init(windowBody);
        }

        try {consoleLog(`Succesfully loaded: ${appName}`, "success", "SYSTEM") } catch (err) {console.log(err)}
    } catch (err) {
        windowBody.innerHTML = `Error loading ${appName}. Error: ${err}`;
        // consoleLog(`Error loading ${appName}. Error: ${err}`, "error", "SYSTEM")
    }

    desktop.append(windowElement);
    return windowElement;
}

window.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

// document.querySelector(".newWindowBtn").addEventListener("click", () => {
//     createWindow(prompt("Name of window?"))
// })

const notification = document.querySelector(".notification");
const notificationText = notification.querySelector(".msg");
const notificationSender = notification.querySelector(".from");
const notificationDismiss = notification.querySelector(".dismiss")

notificationDismiss.addEventListener("click", () => {
    notification.classList.add("hide")
})

export function sendNotification(message, sender) {
    notificationText.textContent = message;
    notificationSender.textContent = `From: ${sender}`;
    notification.classList.remove("hide");
}

export function saveState(data, storageName) {
    localStorage.setItem(storageName, data);
    try {
        consoleLog("Data saved: " + data, "storage", storageName);
    } catch (err) {

    }
    // sendNotification("Data saved: " + data, storageName)
}

export function getState(storageName) {
    let data = localStorage.getItem(storageName)
    try {
        consoleLog("Data retrieved: " + data, "storage", storageName);
    } catch (err) {

    }
    return data;
    // sendNotification("Data retrieved: " + , storageName)
}

