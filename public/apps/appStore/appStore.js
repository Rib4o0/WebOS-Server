export function init(windowBody) {
    const windowName = windowBody.parentElement.querySelector(".moveBar").querySelector(".windowName");
    windowName.textContent = "Notes"
    windowBody.classList.add("notesApp");

    windowBody.innerHTML = `
    `;
}