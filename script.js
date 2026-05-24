// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // 1. Validation Check (Khali tasks stop karne ke liye)
    if (taskText === "") {
        taskInput.style.borderColor = "rgba(231, 76, 60, 0.5)";
        setTimeout(() => taskInput.style.borderColor = "rgba(255, 255, 255, 0.1)", 1500);
        return;
    }

    const taskList = document.getElementById('taskList');

    // 2. Element Generation
    const li = document.createElement('li');
    li.className = 'task-item';

    // Inner element templates with Checkbox actions & Delete buttons
    li.innerHTML = `
        <span class="task-text" onclick="toggleTask(this)">
            <i class="fa-regular fa-circle-check"></i> ${taskText}
        </span>
        <button class="action-btn delete-btn" onclick="deleteTask(this)">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    `;

    // Append to list and reset input focus
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
}

// 3. Toggle Complete State (Line-through logic)
function toggleTask(element) {
    const taskItem = element.parentElement;
    taskItem.classList.toggle('completed');
    
    const icon = element.querySelector('i');
    if(taskItem.classList.contains('completed')) {
        icon.className = 'fa-solid fa-circle-check';
        icon.style.color = '#2ecc71';
    } else {
        icon.className = 'fa-regular fa-circle-check';
        icon.style.color = '';
    }
}

// 4. Task Deletion Handler
function deleteTask(element) {
    const taskItem = element.parentElement;
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'translateY(10px)';
    
    // Smooth animation completion wait
    setTimeout(() => {
        taskItem.remove();
    }, 300);
}

// 5. Input key listener (Enter dabane se add ho jaye)
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});