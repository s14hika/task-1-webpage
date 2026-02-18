// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});

// TO-DO LIST (DOM Manipulation)
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        // Click task to remove
        li.addEventListener("click", () => li.remove());

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
