let windowBodyVar;

import { sendNotification } from "../../window.js";
import { addNote } from "../notes/notes.js";

export function init(windowBody) {
    const windowName = windowBody.parentElement.querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "Console"; 
    windowBody.classList.add("consoleApp");
    windowBodyVar = windowBody;
    const saveLogBtn = document.createElement("button");
    saveLogBtn.classList.add("saveLogBtn");
    saveLogBtn.textContent = "Save Logs"
    windowBody.append(saveLogBtn);

    saveLogBtn.addEventListener("click", () => {
        try {
            let content = "";
            for (let div of windowBody.querySelectorAll("div")) {
                content += div.textContent + "\n\n"
            }
            addNote(`Log: ${getTime()}`, content);
            sendNotification(`Succesfully saved logs - Log: ${getTime()}`, "SYSTEM");
            consoleLog("Succesfully saved logs", "success", "SYSTEM");
        } catch (err) {
            consoleLog(err, "error", "console");
        }
    })
}

export function consoleLog(message, type = "normal", sender = "undefined") {
    const consoleMessage = document.createElement("div");
    consoleMessage.textContent = `[${getTime()}, ${sender}][${type}]: ${message}`
    consoleMessage.classList.add(type);
    windowBodyVar.append(consoleMessage)
}

function getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;;
}