
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and to-do list
    const toDoForm = document.getElementById("to-do-form");
    const toDoList = document.getElementById("to-do-list");

    // Add an event listener for form submission
    toDoForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input value and trim any leading or trailing spaces
        const toDoInput = document.getElementById("to-do");
        const toDoText = toDoInput.value.trim();

        // Check if the input is not empty
        if (toDoText !== "") {
            // Create a new list item with the specified structure
            const listItem = document.createElement("li");
            listItem.className = "to-do-item list-group-item d-flex justify-content-between align-items-center";

            const taskParagraph = document.createElement("p");
            taskParagraph.className = "m-0";
            taskParagraph.textContent = toDoText;

            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.textContent = "Done";

            listItem.appendChild(taskParagraph);
            listItem.appendChild(deleteButton);
            toDoList.appendChild(listItem);

            // Clear the input field
            toDoInput.value = "";
        }
    });

    // Add an event listener for "Done" button clicks
    toDoList.addEventListener("click", function (event) {
        // Check if the clicked element has the "btn-danger" class
        if (event.target.classList.contains("btn-danger")) {
            // Find the closest parent list item and remove it from the list
            const listItem = event.target.closest("li");
            toDoList.removeChild(listItem);
        }
    });
});