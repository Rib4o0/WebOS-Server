export function init(windowBody) {
    const windowName = windowBody.parentElement
        .querySelector(".moveBar")
        .querySelector(".windowName");
    windowName.textContent = "App Creator";
    windowBody.classList.add("appCreator");

    windowBody.innerHTML = `
        <div class="sectionTitle">Projects</div>
        <div class="content">
            <div class="projectContainer">
                <div class="project">
                    <div class="projectName">Project #1</div>
                    <div class="projectDesc">A blank project file</div>
                    <div class="lastModified">Opened: 17 Dec 2024</div>
                </div>
                <div class="project">
                    <div class="projectName">Can't stop now</div>
                    <div class="projectDesc">A VERY hard 2D platformer game.</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Improved App Store</div>
                <div class="projectDesc">A new and improved app store for webOS. Includes support for developing apps easily</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Project #1</div>
                <div class="projectDesc">A blank project file</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Can't stop now</div>
                <div class="projectDesc">A VERY hard 2D platformer game.</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Improved App Store</div>
                <div class="projectDesc">A new and improved app store for webOS. Includes support for developing apps easily</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Project #1</div>
                <div class="projectDesc">A blank project file</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Can't stop now</div>
                <div class="projectDesc">A VERY hard 2D platformer game.</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Improved App Store</div>
                <div class="projectDesc">A new and improved app store for webOS. Includes support for developing apps easily</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Project #1</div>
                <div class="projectDesc">A blank project file</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Can't stop now</div>
                <div class="projectDesc">A VERY hard 2D platformer game.</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Improved App Store</div>
                <div class="projectDesc">A new and improved app store for webOS. Includes support for developing apps easily</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Project #1</div>
                <div class="projectDesc">A blank project file</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Can't stop now</div>
                <div class="projectDesc">A VERY hard 2D platformer game.</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            <div class="project">
                <div class="projectName">Improved App Store</div>
                <div class="projectDesc">A new and improved app store for webOS. Includes support for developing apps easily</div>
                <div class="lastModified">Opened: 17 Dec 2024</div>
            </div>
            </div>
            <button class="createNewProject">Create New</button>
        </div>
        <div class="sidebar">
            <div class="title">Menu</div>
            <button class="closeMenu"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="main">
                <div class="projects">Projects</div>
            </div>
            <div class="footer">
                <div class="howToUse">How to use</div>
                <div class="settings">Settings</div>
            </div>
        </div>
    `;

    const menuBtn = windowBody.querySelector('.closeMenu');

let projects = [
    {   
        projectName: 'Project #1',
        projectDescription: 'This is Project #1 description.',
        lastModified: '31 Feb 2024',
        css: "",
        js: ""
    }
];

menuBtn.addEventListener('click', () => {
    const menu = document.querySelector('.sidebar');
    menu.classList.toggle('opened');
});

function loadSection(section, projectName = undefined) {
    if (section === "projects") {
        
    } else if (section === "project") {
        loadProject(projectName)
    }
}

function loadProject(projectName) {
    
}
}