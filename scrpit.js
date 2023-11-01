// Select the container for displaying notes
const notesContainer = document.querySelector(".notes-container");

// Select the button for creating notes
const createBtn = document.querySelector(".btn");

// Select all existing notes with the class "input-box"
let notes = document.querySelectorAll(".input-box");

// Function to display notes from local storage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Function to update local storage with the current notes
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the "Create Notes" button
createBtn.addEventListener("click", () => {
  // Create a new paragraph element with contenteditable attribute
  let inputBox = document.createElement("p");
  // Create an image element for delete button
  let img = document.createElement("img");

  // Set attributes and append elements to the container
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// Event listener for clicks inside the notes container
notesContainer.addEventListener("click", function (e) {
  // Check if the clicked element is an image (delete button)
  if (e.target.tagName === "IMG") {
    // Remove the parent paragraph and update local storage
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    // If the clicked element is a paragraph, update notes on keyup
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
