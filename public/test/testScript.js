const menuBtn = document.querySelector('.closeMenu');
const content = document.querySelector('.content');
const sectionTitle = document.querySelector('.sectionTitle');
const sidebar = document.querySelector('.sidebar');
const menuRecentProjects = sidebar.querySelector('.recentProjects');
const tabs = sidebar.querySelectorAll("[data-tab]");

let projects = [
    {   
        projectName: 'Project #1',
        projectDescription: 'This is Project #1 description. A small test project for UI validation.',
        lastModified: '31 Jan 2024',
        favorite: false,
        categories: ['Design', 'Prototype'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Project #1";
            windowBody.classList.add("project1");
            windowBody.innerHTML = "HTML code for Project #1 goes here...";
    
            // Javascript code for Project #1 goes here...
        }`
    },
    {   
        projectName: 'Minesweeper',
        projectDescription: 'A classic Minesweeper game. A simple and clean game for entertainment purposes, featuring a 10x10 grid.',
        lastModified: '15 Jan 2024',
        favorite: true,
        categories: ['Game', 'Entertainment'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Minesweeper";
            windowBody.classList.add("minesweeper");
            windowBody.innerHTML = "HTML and game logic for Minesweeper goes here...";
    
            // Javascript for Minesweeper goes here...
        }`
    },
    {   
        projectName: 'My first app',
        projectDescription: 'This is my first app in the app creator. It serves as a basic template for building apps. Contains essential features for an app shell.',
        lastModified: '20 Jan 2024',
        favorite: true,
        categories: ['App Template', 'Starter'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "My First App";
            windowBody.classList.add("firstApp");
            windowBody.innerHTML = "HTML content for My First App goes here...";
    
            // Javascript for First App goes here...
        }`
    },
    {   
        projectName: 'Weather App',
        projectDescription: 'A weather forecasting app using API data to show current weather, 7-day forecasts, and weather alerts.',
        lastModified: '25 Dec 2023',
        favorite: false,
        categories: ['App', 'Weather', 'API'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Weather App";
            windowBody.classList.add("weatherApp");
            windowBody.innerHTML = "HTML content for Weather App goes here...";
    
            // Javascript for Weather App goes here...
        }`
    },
    {   
        projectName: 'To-Do List',
        projectDescription: 'A task management app that allows users to create, edit, and complete tasks. Supports categorization and prioritization.',
        lastModified: '5 Dec 2023',
        favorite: false,
        categories: ['App', 'Productivity'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "To-Do List";
            windowBody.classList.add("todoList");
            windowBody.innerHTML = "HTML content for To-Do List goes here...";
    
            // Javascript for To-Do List goes here...
        }`
    },
    {   
        projectName: 'Portfolio Website',
        projectDescription: 'A personal portfolio website showcasing various projects, skills, and contact information. Built with HTML, CSS, and JavaScript.',
        lastModified: '10 Jan 2024',
        favorite: true,
        categories: ['Website', 'Personal'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Portfolio Website";
            windowBody.classList.add("portfolio");
            windowBody.innerHTML = "HTML content for Portfolio goes here...";
    
            // Javascript for Portfolio goes here...
        }`
    },
    {   
        projectName: 'Recipe Finder',
        projectDescription: 'An app that uses a recipe API to fetch and display recipes based on user search criteria, such as ingredients or cuisine type.',
        lastModified: '15 Dec 2023',
        favorite: false,
        categories: ['App', 'Recipe', 'API'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Recipe Finder";
            windowBody.classList.add("recipeFinder");
            windowBody.innerHTML = "HTML content for Recipe Finder goes here...";
    
            // Javascript for Recipe Finder goes here...
        }`
    },
    {   
        projectName: 'Chat Application',
        projectDescription: 'A real-time chat app allowing users to send messages in various chat rooms. Features include direct messages and chat history.',
        lastModified: '1 Jan 2024',
        favorite: false,
        categories: ['App', 'Chat', 'Real-time'],
        css: "",
        js: `function init(windowBody) {
            const windowName = windowBody.parentElement
            .querySelector(".moveBar").querySelector(".windowName");
            windowName.textContent = "Chat Application";
            windowBody.classList.add("chatApp");
            windowBody.innerHTML = "HTML content for Chat Application goes here...";
    
            // Javascript for Chat Application goes here...
        }`
    }
];


let tasks = [
    {
        taskName: 'Create a new feature: User Profiles',
        tags: ['Feature', 'To-do', 'Design', 'Assigned'],
        priority: "Low",
        description: `Design and implement a user profile feature, including editing and viewing profiles.`
    },
    {
        taskName: 'Fix Login Bug',
        tags: ['Bug', 'Fix', 'In Progress', 'Urgent'],
        priority: "High",
        description: `Resolve the issue causing login failures for users with special characters in their passwords.`
    },
    {
        taskName: 'Write API Documentation',
        tags: ['Documentation', 'Review', 'Long-term'],
        priority: "Low",
        description: `Document all endpoints for the new API to ensure proper integration by external teams.`
    },
    {
        taskName: 'Deploy new feature: Dark Mode',
        tags: ['Feature', 'Deployment', 'To-do', 'Urgent'],
        priority: "High",
        description: `Deploy the dark mode feature to production after final testing.`
    },
    {
        taskName: 'Weekly Database Backup',
        tags: ['Recurring', 'Quick', 'Completed'],
        priority: "High",
        description: `Perform and verify the weekly backup of the production database.`
    },
    {
        taskName: 'Research: Performance Optimization',
        tags: ['Research', 'In Progress', 'Long-term', 'Unassigned'],
        priority: "Medium",
        description: `Investigate ways to optimize page load times, focusing on image compression and lazy loading.`
    },
    {
        taskName: 'Design Landing Page for Product Launch',
        tags: ['Design', 'To-do', 'Assigned', 'Urgent'],
        priority: "High",
        description: `Create a responsive design for the landing page to support the upcoming product launch.`
    },
    {
        taskName: 'Fix CSS Issue in Mobile View',
        tags: ['Bug', 'Fix', 'Blocked', 'Urgent'],
        priority: "High",
        description: `Resolve the issue where the navigation bar overlaps content in mobile view.`
    },
    {
        taskName: 'Write Test Cases for Checkout Workflow',
        tags: ['Testing', 'Documentation', 'In Progress'],
        priority: "Medium",
        description: `Draft test cases for the entire checkout workflow, including edge cases.`
    },
    {
        taskName: 'Deploy Security Patches',
        tags: ['Deployment', 'Quick', 'Completed'],
        priority: "High",
        description: `Deploy the latest security patches to all production servers.`
    },
    {
        taskName: 'Prepare Slides for Quarterly Meeting',
        tags: ['Documentation', 'To-do', 'Assigned'],
        priority: "Medium",
        description: `Create a presentation summarizing the team's achievements for the quarter.`
    },
    {
        taskName: 'Set Up Code Review Workflow',
        tags: ['Feature', 'Review', 'In Progress'],
        priority: "Low",
        description: `Implement a new workflow for code reviews to improve quality assurance.`
    },
    {
        taskName: 'Resolve Payment Gateway Error',
        tags: ['Bug', 'Fix', 'Urgent', 'Testing'],
        priority: "High",
        description: `Investigate and resolve the intermittent error when processing payments with the gateway API.`
    },
    {
        taskName: 'Draft Requirements for New Project',
        tags: ['Research', 'To-do', 'Unassigned'],
        priority: "Low",
        description: `Compile requirements for the upcoming project based on stakeholder input.`
    },
    {
        taskName: 'Conduct Usability Testing for Dashboard',
        tags: ['Testing', 'Design', 'Review', 'Assigned'],
        priority: "Medium",
        description: `Perform usability testing for the new dashboard feature and gather user feedback.`
    }
];


/*
Tags:
-Priority:
 -!!!(High)
 -!!(Medium)
 -!(Low)
-Categories:
 -Bug
 -To-do
 -Fix
 -Feature
 -Documentation
 -Design
 -Research
-Status:
 -Completed
 -In Progress
 -Blocked
-Time based:
 -Quick
 -Long-term
 -Recurring
-Collaboration:
 -Assigned
 -Unassigned
 -Review
-Urgency:
 -Urgent
 -Deferred
-Test and deployment
 -Testing
 -Deployment
*/

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
    content.setAttribute('class', `content ${section}`);
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
                <div class="projectDesc">${shrinkText(project.projectDescription, 150)}</div>
                <div class="lastModified">Last opened: ${project.lastModified}</div>
                <button class="favoriteBtn"><i class="fa-regular fa-star"></i></>
            `
            if (project.favorite) {
                newProject.querySelector('i').classList.add('fa-solid');
                newProject.querySelector('i').classList.remove('fa-regular');
            }

            newProject.querySelector('.favoriteBtn').addEventListener('click', (event) => {
                project.favorite = !project.favorite;
                if (project.favorite) {
                    newProject.querySelector('i').classList.add('fa-solid');
                    newProject.querySelector('i').classList.remove('fa-regular');
                } else {
                    newProject.querySelector('i').classList.remove('fa-solid');
                    newProject.querySelector('i').classList.add('fa-regular');
                }
                event.stopPropagation();
            })
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
            <div class="overview section">
                <div class="title">Overview</div>
                <div class="stats">
                    <div class="timeSpent">
                        <div class="timeSpentTitle">Time spent</div>
                        <div class="value">3 hours</div>
                    </div>
                    <div class="totalProjects">
                        <div class="totalProjectsTitle">Total Projects</div>
                        <div class="value">12</div>
                    </div>
                    <div class="favoriteProjects">
                        <div class="favoriteProjectsTitle">Favorite Projects</div>
                        <div class="value">5</div>
                    </div>
                    <div class="tasksCompleted">
                        <div class="tasksCompletedTitle">Tasks Completed</div>
                        <div class="value">73%</div>
                        <div class="progressbar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recentProjects section">
                <div class="title">Recent projects</div>
                <div class="projects">
                </div>
            </div>
            <div class="favorites section">
                <div class="title">Favorites</div>
                <div class="projects">
                </div>
            </div>
            <div class="quickActions section">
                <div class="title">Quick Actions</div>
                <div class="actions">
                    <button class="quickAction newProject"><i class="fa-solid fa-lightbulb"></i>New Project</button>
                    <button class="quickAction newTask"><i class="fa-solid fa-pencil"></i>New Task</button>
                    <button class="quickAction lastProject"><i class="fa-solid fa-backward"></i>Last Project</button>
                    <button class="quickAction favorites"><i class="fa-solid fa-star"></i>Favorites</button>
                    <button class="quickAction categories"><i class="fa-solid fa-tag"></i>Categories</button>
                    <button class="quickAction settings"><i class="fa-solid fa-gear"></i>Settings</button>
                </div>
            </div>
            <div class="quickTip section">
                <div class="title">Quick Tip</div>
                <div class="tip">The dashboard is the home of the page you can access almost anything from there.</div>
            </div>
            <div class="tasks section">
                <div class="title">Tasks</div>
                <div class="tasksList">
                </div>
            </div>
        `;

        const recentProjectsSection = content.querySelector('.recentProjects')
        const recentProjects = recentProjectsSection.querySelector('.projects');
        for (let i = 0; i < 4; i++) {
            if (projects[i] !== undefined) {
                let project = projects[i];
                const newProject = document.createElement('div');
                newProject.classList.add('recentProject');
                newProject.innerHTML = `
                    <div class="projectName">${project.projectName}</div>
                    <div class="projectDesc">${shrinkText(project.projectDescription, 150)}</div>
                `;

                newProject.addEventListener('click', () => loadProject(project));

                recentProjects.append(newProject);
            }
        }

        const favoritesSection = content.querySelector('.favorites');
        const favorites = favoritesSection.querySelector('.projects');
        let favoriteProjects = projects.filter(project => project.favorite == true);
        for (let favoriteProject of favoriteProjects) {
            const newProject = document.createElement('div');
            newProject.classList.add('favoriteProject');
            newProject.innerHTML = `
                    <div class="projectName">${favoriteProject.projectName}</div>
                    <div class="projectDesc">${shrinkText(favoriteProject.projectDescription, 150)}</div>
                `;
            favorites.append(newProject);
        }

        const tasksSection = content.querySelector('.tasks');
        const tasksList = tasksSection.querySelector('.tasksList');
        for (let task of tasks) {
            const newTask = document.createElement('div');
            newTask.classList.add('task');
            newTask.innerHTML = `
                        <div>
                            <div class="taskName">${task.taskName}</div>
                            <div class="taskDescription">${task.description}</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag ${(task.priority).toLowerCase()}">${task.priority === "High" ? "!!!" : task.priority === "Medium" ? "!!" : "!"}</div>
                            </div>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
            `;
            const tags = newTask.querySelector('.tags');
            for (let tag of task.tags) {
                const newTag = document.createElement('div');
                newTag.setAttribute("class", `tag ${(tag.replace(" ", "")).toLowerCase()}`)
                newTag.textContent = tag;
                tags.append(newTag);
            }
            tasksList.append(newTask);
        }
    } else if (section === "tasks") {
        sectionTitle = "Tasks";
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
        favorite: false,
        categories: [],
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
    content.setAttribute('class', `content`);
    let projectIndex = projects.indexOf(project);
    if (projectIndex !== -1) {
        const [currentProject] = projects.splice(projectIndex, 1)
        projects.unshift(currentProject);
        project = projects[0];
    }
    project.lastModified = getDate();
    menuRecentProjects.querySelector(".projects").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let project = projects[i];
        if (project !== undefined) {
            const newProject = document.createElement("div");
            newProject.classList.add("project");
            newProject.innerHTML = project.projectName;
            newProject.addEventListener('click', () => {
                sidebar.classList.remove("opened");
                loadProject(project)
            })
            menuRecentProjects.querySelector(".projects").appendChild(newProject);
        } else {
            continue;
        }
    }
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

function shrinkText(text, length) {
    if (text.length > length) {
        return text.substring(0, length - 3) + "...";
    } else {
        return text;
    }
}