let noteInput = document.getElementById("noteInput");
let addNote = document.getElementById("addNote");
let notesList = document.getElementById("notesList");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let container = document.getElementById("container");
let notes = JSON.parse(localStorage.getItem("notes")) || []; // localstorge the notes
// add new note in the notesList
function addnewnotes() {
  let note = noteInput.value;
  if (noteInput.value !== "") {
    notesList.innerHTML += `<li> ${note} <button  onclick="removenote(this)">remove</button> <button class ='update'>update</button> </li>`;
    noteInput.value = "";
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    alert("please enter notes");
  }
}


// remove one the note
function removenote(button) {
  let listnote = button.parentElement.firstChild.textContent.trim();
  notes = notes.filter((note) => note.trim() !== listnote);
  localStorage.setItem("notes", JSON.stringify(notes));
  button.parentElement.remove();
}
// update the note
function updatenote(button) {
  let listnote = button.parentElement.firstChild.textContent.trim();
  let newnote = prompt("please enter the new note", listnote);
  if (newnote !== null && newnote.trim() !== "") {
    // تحديث المصفوفة في localStorage
    notes = notes.map((note) => (note.trim() === listnote ? newnote : note));
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}


// add background light and dark
let containers = document.getElementById("container");
let notesLists = document.getElementById("notesList");
let body = document.body;
function notedark() {
  containers.style.background = "#333";
  containers.style.color = "white";
  notesLists.style.color = "#333";
  body.style.background = "#555";
  localStorage.setItem("theme", "dark");
}
function notelight() {
  containers.style.background = "#fff";
  body.style.background = "#f4f4f4";
  containers.style.color = "#333";
  localStorage.setItem("theme", "light");
}

// عند تحميل الصفحة، نتحقق من الوضع المخزن
window.onload = function() {
    notes.forEach((note) => {
    notesList.innerHTML += `<li> ${note} <button onclick="removenote(this)">remove</button> <button class = 'update' onclick="updatenote(this)"> update </button>  </li>`;
  });
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    notedark();
  } else {
    notelight();
  }
};



