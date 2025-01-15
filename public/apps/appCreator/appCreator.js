export function init(windowBody) {
    const windowName = windowBody.parentElement
        .querySelector(".moveBar")
        .querySelector(".windowName");
    windowName.textContent = "App Creator";
    windowBody.classList.add("appCreator");

    windowBody.innerHTML = `
        <div class="sectionTitle">Tasks</div>
        <div class="content tasks">
            <div class="overview section">
                <div class="title">Task overview</div>
                <div class="stats">
                    <div class="totalTasks">
                        <div class="title">Total tasks</div>
                        <div class="value">102</div>
                    </div>
                    <div class="completedTasks">
                        <div class="title">Completed tasks</div>
                        <div class="value">49</div>
                    </div>
                    <div class="percentageCompleted">
                        <div class="title">Completeness %</div>
                        <div class="value">48%</div>
                        <div class="progressbar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="searchTasks section">
                <div class="title">All Tasks</div>
                <div class="searchOptions">
                    <input type="text" class="search" placeholder="Search tasks">
                    <div class="tags">
                        <div class="searchingTags">
                            <div class="tag to-do">To-do<i class="fa-solid fa-circle-xmark"></i></div>
                            <div class="tag feature">Feature<i class="fa-solid fa-circle-xmark"></i></div>
                            <div class="tag deployment">Deployment<i class="fa-solid fa-circle-xmark"></i></div>
                            <div class="tag quick">Quick<i class="fa-solid fa-circle-xmark"></i></div>
                        </div>
                        <button class="addTags">Tags</button>
                        <div class="addTagsMenu opened">
                            <div class="title">Tags</div>
                            <div class="tagSections">
                                <div class="section">
                                    <div class="title">Priority</div>
                                    <div class="tags">
                                        <div class="tag high">!!!</div>
                                        <div class="tag medium">!!</div>
                                        <div class="tag low">!</div>
                                        <div class="tag urgent">Urgent</div>
                                        <div class="tag deffered">Deffered</div>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="title">Categories</div>
                                    <div class="tags">
                                        <div class="tag bug">Bug</div>
                                        <div class="tag medium">To-do</div>
                                        <div class="tag fix">Fix</div>
                                        <div class="tag feature">Feature</div>
                                        <div class="tag documentation">Documentation</div>
                                        <div class="tag design">Design</div>
                                        <div class="tag research">Research</div>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="title">Status</div>
                                    <div class="tags">
                                        <div class="tag completed">Completed</div>
                                        <div class="tag inprogress">In Progress</div>
                                        <div class="tag blocked">Blocked</div>
                                        <div class="tag testing">Testing</div>
                                        <div class="tag deployment">Deployment</div>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="title">Time based</div>
                                    <div class="tags">
                                        <div class="tag quick">Quick</div>
                                        <div class="tag long-term">Long-term</div>
                                        <div class="tag recurring">Recurring</div>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="title">Collaboration</div>
                                    <div class="tags">
                                        <div class="tag assigned">Assigned</div>
                                        <div class="tag unassigned">Unassigned</div>
                                        <div class="tag review">Review</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks">
                    <div class="task">
                        <div>
                            <div class="taskName">Create A New Feature</div>
                            <div class="taskDesc">Create the tasks section of this app</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag to-do">To-do</div>
                                <div class="tag feature">Feature</div>
                                <div class="tag long-term">Long-term</div>
                                <div class="tag inprogress">In Progress</div>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div>
                    <div class="task">
                        <div>
                            <div class="taskName">Create A New Feature</div>
                            <div class="taskDesc">Create the tasks section of this app</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag to-do">To-do</div>
                                <div class="tag feature">Feature</div>
                                <div class="tag long-term">Long-term</div>
                                <div class="tag inprogress">In Progress</div>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div>
                    <div class="task">
                        <div>
                            <div class="taskName">Create A New Feature</div>
                            <div class="taskDesc">Create the tasks section of this app</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag to-do">To-do</div>
                                <div class="tag feature">Feature</div>
                                <div class="tag long-term">Long-term</div>
                                <div class="tag inprogress">In Progress</div>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div> 
                    <div class="task">
                        <div>
                            <div class="taskName">Create A New Feature</div>
                            <div class="taskDesc">Create the tasks section of this app</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag to-do">To-do</div>
                                <div class="tag feature">Feature</div>
                                <div class="tag long-term">Long-term</div>
                                <div class="tag inprogress">In Progress</div>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div> 
                    <div class="task">
                        <div>
                            <div class="taskName">Create A New Feature</div>
                            <div class="taskDesc">Create the tasks section of this app</div>
                        </div>
                        <div>
                            <div class="tags">
                                <div class="tag to-do">To-do</div>
                                <div class="tag feature">Feature</div>
                                <div class="tag long-term">Long-term</div>
                                <div class="tag inprogress">In Progress</div>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div> 
                    <!-- Story of a hustla -->
                </div>
            </div>
            <div class="addTask section">
                <div class="title">Add Task</div>
            </div>
        </div>
        <div class="sidebar">
            <div class="title">Menu</div>
            <button class="closeMenu"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="main">
                <div data-tab="dashboard" class="dashboard"><i class="fa-solid fa-home"></i><div>Dashboard</div></div>
                <div data-tab="projects" class="projects"><i class="fa-solid fa-folder"></i><div>Projects</div></div>
                <div data-tab="favorites" class="favorites"><i class="fa-solid fa-star"></i><div>Favorites</div></div>
                <div data-tab="categories" class="categories"><i class="fa-solid fa-tag"></i><div>Categories</div></div>
                <div data-tab="tasks" class="tasks"><i class="fa-solid fa-pencil"></i><div>Tasks</div></div>
            </div>
            <div class="recentProjects">
                <div class="title">Recent Projects</div>
                <div class="projects">
                    <div class="recentProject">My First App</div>
                    <div class="recentProject">MineSweeper</div>
                    <div class="recentProject">App Creator</div>
                </div>
            </div>
            <div class="footer">
                <div class="howToUse"><i class="fa-solid fa-circle-info"></i>How to use</div>
                <div class="settings"><i class="fa-solid fa-gear"></i>Settings</div>
            </div>
        </div>
    `;

    const menuBtn = windowBody.querySelector('.closeMenu');
const content = windowBody.querySelector('.content');
const sectionTitle = windowBody.querySelector('.sectionTitle');
const sidebar = windowBody.querySelector('.sidebar');
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
            windowBody.innerHTML = "<div class='text'>Simo e pederas</div> <button class='sigmaBtn'>Press to change text</button>";

            const sigmaBtn = windowBody.querySelector(".sigmaBtn");
            sigmaBtn.addEventListener("click", () => {
                const text = windowBody.querySelector(".text");
                text.textContent = "Hello, World!";
            });
    
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
    },
    {   
        projectName: 'Timer App',
        projectDescription: 'A simple timer application',
        lastModified: '1 Jan 2024',
        favorite: false,
        categories: ['App'],
        css: `.window:has(.timerApp) {
    background: transparent;
}

.timerApp {
    width: calc(100% - 20px);
    height: calc(100% - 50px);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: var(--background);
    backdrop-filter: blur(10px);
}

.timerApp > .time {
    font-size: 30px;
}

.timerApp > .progressBar {
    width: 50%;
    height: 5px;
    background-color: var(--lighter-shade);
    border-radius: 5px;
    overflow: hidden;
}

.timerApp > .progressBar > .progress {
    width: 0%;
    height: 100%;
    background-color: var(--accent);
    border-radius: inherit;
    transition: all 250ms;
}

.timerApp > .inputs {
    display: flex;
    width: 200px;
    height: 30px;
    justify-content: space-between;
}

.timerApp > .inputs > .timeInput {
    width: 65%;
    border: 2px solid var(--lighter-shade);
    background-color: var(--background);
}

.timerApp > .inputs > .startBtn {
    width: 60px;
    border: none;
    border-radius: 2px;
}

.timerApp > .inputs > .startBtn {
    background-color: var(--accent);
    color: white;
}

.timerApp > .inputs > .startBtn.stop {
    background-color: rgb(255, 43, 43);
}`,
        js: `
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
            
            function init(windowBody) {
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
        `
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
        tags: ['Documentation', 'Review', 'Long-term', "Deffered"],
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
 -Urgent
 -Deferred
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
 -Testing
 -Deployment
-Time based:
 -Quick
 -Long-term
 -Recurring
-Collaboration:
 -Assigned
 -Unassigned
 -Review
*/

menuBtn.addEventListener('click', () => {
    const menu = windowBody.querySelector('.sidebar');
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
    windowBody.querySelector(".sidebar").classList.remove("opened");
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

    const testProjectBtn = content.querySelector(".testProject");
    testProjectBtn.addEventListener('click', () => testProject(project));

    const jsEditor = CodeMirror(windowBody.querySelector('.jsEditor'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default',
        value: project.js,
    });

    jsEditor.setSize('100%', '100%'); 

    const cssEditor = CodeMirror(windowBody.querySelector('.cssEditor'), {
        mode: 'css',
        lineNumbers: true,
        theme: 'default',
        value: project.css,
    });
    
    // Explicitly set the editor height
    cssEditor.setSize('100%', '100%');
}

testProject(projects[8]);

function testProject(project) {
    sectionTitle.innerHTML = project.projectName + ": Testing";
    content.setAttribute('class', 'content testing');

    // Clear existing content
    content.innerHTML = '';

    content.innerHTML = `
        <style>
        .testSpace > .content.testing > .window {
        min-width: 300px;
        min-height: 200px;
    width: 50%;
    height: 60%;
    border-radius: 5px;
    resize: both;
    position: fixed;
    border: 2px solid var(--lighter-shade);
    overflow: hidden;
}

.testSpace > .content.testing > .window > .moveBar {
    position: relative;
    top: 0;
    left: 0;
    background: var(--lighter-shade);
    width: calc(100% - 20px);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    user-select: none;
}

.testSpace > .content.testing > .window > .windowBody {
    background: var(--background);
    backdrop-filter: blur(10px);
    height: calc(100% - 30px);
}
            ${project.css}
        </style>
        <div class="window">
            <div class="moveBar">
                <div class="windowName">Testing app</div>
                <div class="btnBox"></div>
            </div>
            <div class="windowBody"><div>
        </div>
    `;

    const windowBody = content.querySelector('.windowBody');

    // Wrap eval in try-catch to handle errors
    try {
        (function() {
            eval(project.js);
            init(windowBody);
        })();
    } catch (error) {
        console.error("Error evaluating project.js:", error);
    }

    
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
}