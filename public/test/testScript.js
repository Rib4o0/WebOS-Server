const menuBtn = document.querySelector('.closeMenu');
const content = document.querySelector('.content');
const sectionTitle = document.querySelector('.sectionTitle');
const sidebar = document.querySelector('.sidebar');
const tabs = sidebar.querySelectorAll("[data-tab]");

let projects = [
    {   
        projectName: 'Project #1',
        projectDescription: 'This is Project #1 description.',
        lastModified: '31 Feb 2024',
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "App Name";
            windowBody.classList.add("appName");
            windowBody.innerHTML = "HTML code goes here...";
    
            // Javascript code goes here...
        }`
    },
];

menuBtn.addEventListener('click', () => {
    const menu = document.querySelector('.sidebar');
    menu.classList.toggle('opened');
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        loadSection(tab.dataset.tab);
    })
})

// loadSection("dashboard");

function loadSection(section) {
    if (section === "projects") {
        sectionTitle.textContent = "Projects";
        content.innerHTML = `
            <div class="projectContainer"></div>
            <button class="createNewProject">Create New</button>
            <div class="newProjectMenu closed">
                <div class="title">Project Settings</div>
                <button class="closeNewProject">Close</button>
                <div class="inputFields">
                    <label class="projectNameLabel" for="projectName">Project Name:</label>
                    <input class="projectNameInput" type="text" id="projectName" placeholder="Project Name">
                    <label class="projectDescriptionLabel" for="projectDescription">Project Description:</label>
                    <textarea class="projectDescriptionInput"type="text" id="projectDescription" placeholder="Project Description"></textarea>
                </div>
                <div class="projectTemplates">Project Templates:</div>
                <div class="templates">
                    <div class="blankProject">Blank</div>
                    <div class="basicProject selected">Basic</div>
                    <div class="gameProject">Game</div>
                </div>
                <button class="createProjectButton">Create Project</div>
            </div>
        `;
        let projectContainer = content.querySelector(".projectContainer");
        for (let project of projects) {
            const newProject = document.createElement("div");
            newProject.classList.add("project");
            newProject.innerHTML = `
                <div class="projectName">${project.projectName}</div>
                <div class="projectDesc">${project.projectDescription}</div>
                <div class="lastModified">Last opened: ${project.lastModified}</div>
            `
            newProject.addEventListener('click', () => loadProject(project))

            projectContainer.appendChild(newProject);
        }

        const createNewProjectBtn = content.querySelector('.createNewProject');
        const newProjectMenu = content.querySelector('.newProjectMenu');
        createNewProjectBtn.addEventListener('click', () => {
            let currentTemplate = "Basic"
            newProjectMenu.classList.remove('closed');
            newProjectMenu.querySelector('.closeNewProject').addEventListener('click', () => {newProjectMenu.classList.add('closed');});
            newProjectMenu.querySelector('.templates').querySelectorAll("div").forEach(template => {
                template.addEventListener('click', () => {
                    newProjectMenu.querySelector('.templates').querySelectorAll("div").forEach(template => template.classList.remove('selected'));
                    template.classList.add('selected');
                    currentTemplate = template.textContent;
                });
            });
            const createProjectBtn = content.querySelector('.createProjectButton');
            createProjectBtn.addEventListener('click', () => {
                createProject(newProjectMenu.querySelector('.projectNameInput').value, newProjectMenu.querySelector('.projectDescriptionInput').value, currentTemplate);
                newProjectMenu.classList.add('closed');
            });
        });
    } else if (section === "dashboard") {
        sectionTitle.textContent = "Dashboard";
        content.innerHTML = `
            <div class="overview"></div>
            <div class="recentProjects"></div>
        `;
    }
}

/*CSS code goes here 
function init(windowBody) {
const windowName = windowBody.parentElement
.querySelector(".moveBar").querySelector(".windowName");
windowName.textContent = "App Name";
windowBody.classList.add("appName");
windowBody.innerHTML = "HTML code goes here...";

// Javascript code goes here...
}
*/
function createProject(name, desc, template) {
    let defaultName = false;
    if (name === "") defaultName = true;
    let defaultDescription = false
    if (desc === "") defaultDescription = true;
    const newProject = {
        projectName: name,
        projectDescription: desc,
        lastModified: getDate(),
        css: '',
        js: '',
    }
    switch (template) {
        case 'Blank':
            newProject.css = '';
            newProject.js = '';
            if (defaultName) newProject.projectName = "Blank Project #" + (projects.length + 1);
            break;
        case 'Basic':
            if (defaultName) newProject.projectName = "Basic Project #" + (projects.length + 1);
            if (defaultDescription) newProject.projectDescription = "A basic project";
            newProject.css = `/* CSS code goes here */`;
            newProject.js = `function init(windowBody) {
    const windowName = windowBody.parentElement
    .querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "App Name";
    windowBody.classList.add("appName");
    windowBody.innerHTML = "HTML code goes here...";

    // Javascript code goes here...
}`;
            break;
        case 'Game':
            if (defaultName) newProject.projectName = "Game Project #" + (projects.length + 1);
            if (defaultDescription) newProject.projectDescription = "A basic game project";
            newProject.css = `GAME TEMPLATE IS STILL WORK IN PROGRESS`;
            newProject.js = `GAME TEMPLATE IS STILL WORK IN PROGRESS`;
            break;
        default:
            console.log('Invalid template');
            return;
    }
    projects.push(newProject);
    loadProject(newProject);
    document.querySelector(".sidebar").classList.remove("opened");
}

function loadProject(project) {
    let projectIndex = projects.indexOf(project);
    if (projectIndex !== -1) {
        const [currentProject] = projects.splice(projectIndex, 1)
        projects.unshift(currentProject);
        project = projects[0];
    }
    project.lastModified = getDate();
    sectionTitle.textContent = project.projectName;
    content.innerHTML = `
        <div class="saveControls">
                <div class="saveStatus">Project Saved Succesfully</div>
                <div class="saveProject">Save</div>
                <div class="testProject">Test</div>
                <div class="deleteProject">Delete</div>
            </div>
            <div class="textEditor">
                <div class="javascript">
                    <div class="tab">JavaScript</div>
                    <div class="jsEditor"></div>
                </div>
                <div class="css">
                    <div class="tab">CSS</div>
                    <div class="cssEditor"></div>
                </div>
            </div>
            <button class="projectSettingsBtn">Open Project Settings</button> 
            <div class="projectSettingsMenu">
                <label for=".projectNameInput">Project Name:</label>
                <input type="text" class="projectNameInput" placeholder="Project Name">
                <label for=".projectDescriptionInput">Project Description:</label>
                <input type="text" class="projectDescriptionInput">
            </div>
    `;

    const jsEditor = CodeMirror(document.querySelector('.jsEditor'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default',
        value: project.js,
    });

    jsEditor.setSize('100%', '100%'); 

    const cssEditor = CodeMirror(document.querySelector('.cssEditor'), {
        mode: 'css',
        lineNumbers: true,
        theme: 'default',
        value: project.css,
    });
    
    // Explicitly set the editor height
    cssEditor.setSize('100%', '100%');
}



// Explicitly set the editor height
// Width: 100%, Height: 100%

function getDate() {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    let formatDate = new Intl.DateTimeFormat('en-UK', options).format(new Date());
    return formatDate.replace(",", "");
}