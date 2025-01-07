export function init(windowBody) {
    const windowName = windowBody.parentElement.querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "Settings"
    windowBody.classList.add("settingsApp")

    windowBody.innerHTML = "<div class=\"sidePanel\">\n" +
        "                    <button class=\"settingsTab\">General</button>\n" +
        "                    <button class=\"settingsTab selected\">Appearance</button>\n" +
        "                    <button class=\"settingsTab\">Loaded Apps</button>\n" +
        "                    <button class=\"settingsTab\">Storage</button>\n" +
        "                    <button class=\"settingsTab\">Windows</button>\n" +
        "                    <button class=\"settingsTab\">Notifications</button>\n" +
        "                    <button class=\"settingsTab\">Extras</button>\n" +
        "                </div>\n" +
        "                <div class=\"controlSide\">\n" +
        "                    <div class=\"currentTab\">Appearance</div>\n" +
        "                    <div class=\"setting\">\n" +
        "                        <div class=\"settingName\">Theme</div>\n" +
        "                        <div class=\"options\">\n" +
        "                            <div class=\"lightMode selected\">Light</div>\n" +
        "                            <div class=\"darkMode\">Dark</div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
                            `<div class="setting">
                        <div class="settingName">Accent Color</div>
                        <div class="colorInput">
                            <div class="customColorPicker"></div>
                            <input type="color" class="accentPicker">
                        </div>
                   </div>
                   <div class="setting">
                        <div class="settingName">Background Image URL</div>
                        <div class="inputField"><input type="text" class="bgURLInput" placeholder="https://example.img/3x4Mpl3"></div>
                   </div>
                   <div class='setting'>
                        <div class='settingName'>Window Style</div>
                        <div class='options'>
                            <div class='glassWindows'>Glass</div>
                            <div class='solidWindows selected'>Solid</div>
                        </div>
                   </div>
                   <div class='setting'>
                        <div class='settingName'>Font Style</div>
                        <div class='options'>
                            <div class='handwrittenFont'>Fancy</div>
                            <div class='normalFont selected'>Normal</div>
                            <div class='modernFont'>Modern</div>
                        </div>
                   </div>
                    <div class='setting'>
                        <div class='settingName'>Clock shadow</div>
                        <div class='options'>
                            <div class='clockShadow'>On</div>
                            <div class='noClockShadow selected'>Off</div>
                        </div>
                   </div>
                   ` +
        "                </div>"

        const lightModeToggle = windowBody.querySelector(".lightMode");
        const darkModeToggle = windowBody.querySelector(".darkMode");
        const accentPicker = windowBody.querySelector(".accentPicker");
        const backgroundURLInput = windowBody.querySelector(".bgURLInput")
        const glassWindowToggle = windowBody.querySelector(".glassWindows")
        const solidWindowToggle = windowBody.querySelector(".solidWindows")
        const handwrittenFont = windowBody.querySelector(".handwrittenFont");
        const normalFont = windowBody.querySelector(".normalFont");
        const modernFont = windowBody.querySelector(".modernFont");
        const enableClockShadow = windowBody.querySelector(".clockShadow");
        const disableClockShadow = windowBody.querySelector(".noClockShadow");

        let validWallpaper = false;

        lightModeToggle.addEventListener("click", () => {
            document.documentElement.setAttribute("data-theme", "light")
            lightModeToggle.classList.add("selected");
            darkModeToggle.classList.remove("selected")
            if (!validWallpaper) {
                let imageURL
                let systemTheme = document.documentElement.getAttribute("data-theme")
                if (systemTheme === "light") imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg";
                else imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg"
                const body = document.querySelector("body");
                body.style.background = `url(${imageURL})`; // Set the background image
                body.style.backgroundSize = "cover"; // Ensure the image covers the entire body
                body.style.backgroundPosition = "center center"; // Center the background image
                body.style.backgroundRepeat = "no-repeat";
            }
        })
        
        darkModeToggle.addEventListener("click", () => {
            document.documentElement.setAttribute("data-theme", "dark")
            lightModeToggle.classList.remove("selected");
            darkModeToggle.classList.add("selected")
            if (!validWallpaper) {
                let imageURL
                let systemTheme = document.documentElement.getAttribute("data-theme")
                if (systemTheme === "light") imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg";
                else imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg"
                const body = document.querySelector("body");
                body.style.background = `url(${imageURL})`; // Set the background image
                body.style.backgroundSize = "cover"; // Ensure the image covers the entire body
                body.style.backgroundPosition = "center center"; // Center the background image
                body.style.backgroundRepeat = "no-repeat";
            }
        })

        accentPicker.addEventListener("input", e => {
            document.documentElement.style.setProperty("--accent", e.target.value)
        })

        backgroundURLInput.addEventListener("input", e => {
            let imageURL = e.target.value;
            
            let testImg = new Image()

            testImg.onload = function () {
                // Apply the background styles dynamically
                const body = document.querySelector("body");
                body.style.background = `url(${imageURL})`; // Set the background image
                body.style.backgroundSize = "cover"; // Ensure the image covers the entire body
                body.style.backgroundPosition = "center center"; // Center the background image
                body.style.backgroundRepeat = "no-repeat"; // Prevent the background from repeating
                validWallpaper = true;
            } 

            testImg.onerror = function () {
                let systemTheme = document.documentElement.getAttribute("data-theme")
                if (systemTheme === "light") imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg";
                else imageURL = "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg"
                const body = document.querySelector("body");
                body.style.background = `url(${imageURL})`; // Set the background image
                body.style.backgroundSize = "cover"; // Ensure the image covers the entire body
                body.style.backgroundPosition = "center center"; // Center the background image
                body.style.backgroundRepeat = "no-repeat"; // Prevent the background from repeating
                validWallpaper = false;
            } 

            testImg.src = imageURL;
            
        });

        glassWindowToggle.addEventListener("click", () => {
            document.documentElement.setAttribute("data-glass", "on")
            glassWindowToggle.classList.add("selected");
            solidWindowToggle.classList.remove("selected")
        })

        solidWindowToggle.addEventListener("click", () => {
            document.documentElement.setAttribute("data-glass", "off")
            glassWindowToggle.classList.remove("selected");
            solidWindowToggle.classList.add("selected")
        })

        handwrittenFont.addEventListener("click", () => {
            document.documentElement.setAttribute("data-font", "handwritten");
            handwrittenFont.classList.add("selected");
            normalFont.classList.remove("selected");
            modernFont.classList.remove("selected");
        })

        normalFont.addEventListener("click", () => {
            document.documentElement.setAttribute("data-font", "normal");
            handwrittenFont.classList.remove("selected");
            normalFont.classList.add("selected");
            modernFont.classList.remove("selected");
        })

        modernFont.addEventListener("click", () => {
            document.documentElement.setAttribute("data-font", "modern");
            handwrittenFont.classList.remove("selected");
            normalFont.classList.remove("selected");
            modernFont.classList.add("selected");
        })

        enableClockShadow.addEventListener("click", () => {
            document.documentElement.setAttribute("data-clock-shadow", "on");
            disableClockShadow.classList.remove("selected");
            enableClockShadow.classList.add("selected");
        })

        disableClockShadow.addEventListener("click", () => {
            document.documentElement.setAttribute("data-clock-shadow", "no");
            disableClockShadow.classList.add("selected");
            enableClockShadow.classList.remove("selected");
        })
}