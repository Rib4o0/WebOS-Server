import {downloadedApps, loadApps, sendNotification, saveState} from "../../window.js"
import { consoleLog } from "../console/console.js";

let apps = [];

export function init(windowBody) {
    const windowName = windowBody.parentElement
        .querySelector(".moveBar")
        .querySelector(".windowName");
    windowName.textContent = "App Store";
    windowBody.classList.add("appStore");

    fetch("/apps/apps.json")
        .then((response) => response.json())
        .then((data) => {
            const availableApps = JSON.stringify(data)
            apps = JSON.parse(availableApps).apps;
            for (let app of apps) {
                if (downloadedApps.includes(app.appName)) {
                    app.downloaded = true;
                }
            }
            loadAppStore()
        })
        .catch((error) => {
            console.error("Error fetching JSON:", error);
            windowBody.innerHTML = "Failed to load app data." + error;
        });

        function loadAppStore() {
            windowBody.innerHTML = ``;
            for (let app of apps) {
                windowBody.innerHTML += `
                    <div class="app">
                        <div class="appName">${app.displayName}</div>
                        <div class="appDownloads">Downloads: ${app.downloads}</div>
                        <button data-app="${app.appName}" class="downloadBtn ${app.downloaded ? "installed" : ""}">${app.downloaded ? "Uninstall" : "Download"}</button>
                    </div>
                `;
            }
            windowBody.querySelectorAll(".downloadBtn").forEach(btn => {
                btn.addEventListener("click", () => {
                    if (btn.classList.contains("installed")) {
                        downloadedApps.splice(downloadedApps.indexOf(btn.dataset.app), 1)
                        loadApps();
                        window.location.reload();
                    } else {
                        downloadedApps.unshift(btn.dataset.app)
                        try {
                            consoleLog("Succefully installed: " + btn.dataset.app, "installing", "App-Store")
                        } catch (err) {
                            try {
                                consoleLog(err, "installing", "App-Store")
                            } catch (err) {
                                console.error("Error installing app:", err);
                            }
                        }
                        apps.forEach(app => {
                            if (app.appName == btn.dataset.app) app.downloaded = true;
                        })
                        loadAppStore();
                        saveState(JSON.stringify(downloadedApps), "apps");
                        // loadApps();
                        // window.location.reload();
                        sendNotification(btn.dataset.app + " installed successfully. You need to reload the page for the app to show up", "App Store");
                    }
                })
            })
        }
}