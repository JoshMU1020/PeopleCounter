
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.innerText = count;
};

function save() {
    if (saveEl.innerText == "Previous Entries:") {
        saveEl.innerText += " " + countEl.innerText;
    } else {
        saveEl.innerText += " - " + countEl.innerText;
    }
    count = 0
    countEl.innerText = count;
};