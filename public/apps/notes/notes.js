let notes = [
    {title: "New note", content: ""}
];

import { saveState, getState } from "../../window.js";

let updateNoteListFunc 
const storageKey = "Hudabip1294"

export function init(windowBody) {
    const windowName = windowBody.parentElement.querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "Notes"
    windowBody.classList.add("notesApp");

    windowBody.innerHTML = `
        <div class="sidePanel">
                    <div class="note">
                        <div class="title">Once upon a time...</div>
                        <div class="description">The little kid was running...</div>
                    </div>
                    <div class="note">
                        <div class="title">In a galaxy far far away</div>
                        <div class="description">Darth vader fights Obi wan kenobi...</div>
                    </div>
                    <div class="note">
                        <div class="title">The answer 42</div>
                        <div class="description">4242424242424242...</div>
                    </div>
               </div>
               <button class="addNoteBtn">+</button>
               <div class="noteEditPanel">
                    <input class="title" id="title" type="text" placeholder="Title">
                    <textarea class="content" placeholder="Everything you can imagine..."></textarea>
               </div>
    `;

    const notesPanel = windowBody.querySelector(".sidePanel");
    const addNoteBtn = windowBody.querySelector(".addNoteBtn");
    const title = windowBody.querySelector("#title");
    const content = windowBody.querySelector(".content");

    addNoteBtn.addEventListener("click", createNote) 

    title.addEventListener("input", e => {
        notes[loadedNote].title = e.target.value;
        updateNoteList();
    })

    content.addEventListener("input", e => {
        notes[loadedNote].content = e.target.value;
        updateNoteList();
    })

    function createNote() {
        notes.push({title: "New note", content: ""})
        updateNoteList()
        loadNote(notes.length - 1)
    }

    let loadedNote = 0;

    if (getState(storageKey)) notes = JSON.parse(getState(storageKey));
    updateNoteList();


    function updateNoteList() {
        notesPanel.innerHTML = "";
        let index = 0;
        for (let note of notes) {
            const noteTab = document.createElement("div");
            noteTab.classList.add("note");
            noteTab.dataset.noteIndex = index;
            noteTab.innerHTML = `
                <div class="title">${note.title}</div>
                <div class="description">${note.content.substring(0,20)}...</div>
            `

            noteTab.addEventListener('click', () => {
                loadNote(parseInt(noteTab.dataset.noteIndex))
                
            });
            notesPanel.prepend(noteTab)

            index++;
        }

        let noteTabs = windowBody.querySelectorAll(".note");
                noteTabs.forEach((tab, ind) => {
                    tab.classList.remove("selected");
                    if (notes.length - ind - 1 == loadedNote) tab.classList.add("selected")
                });
        saveState(JSON.stringify(notes), storageKey)
    }

    updateNoteListFunc = updateNoteList

    loadNote(notes.length - 1)

    function loadNote(index) {
        loadedNote = index;
        title.value = notes[index].title;
        content.value = notes[index].content;
        let noteTabs = windowBody.querySelectorAll(".note");
                noteTabs.forEach((tab, ind) => {
                    tab.classList.remove("selected");
                    if (notes.length - ind - 1 == index) tab.classList.add("selected")
                });
    }
}

export function addNote(title, content) {
    notes.push({title: title, content: content})
    updateNoteListFunc();
}