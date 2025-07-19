var input = document.getElementById("taskInput");
var btn = document.getElementById("addBtn");
var list = document.getElementById("taskList");

var allTasks = [];

if (localStorage.getItem("tasks")) {
  allTasks = JSON.parse(localStorage.getItem("tasks"));
  show();
}

btn.onclick = function () {
  var val = input.value;
  if (val != "") {
    var obj = { text: val, done: false };
    allTasks.push(obj);
    input.value = "";
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    show();
  }
};

function show() {
  list.innerHTML = "";
  for (var i = 0; i < allTasks.length; i++) {
    var li = document.createElement("li");

    if (allTasks[i].done == true) {
      li.className = "completed";
    }

    var check = document.createElement("input");
    check.type = "checkbox";
    check.checked = allTasks[i].done;
    check.onchange = (function (index) {
      return function () {
        allTasks[index].done = this.checked;
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        show();
      };
    })(i);

    var span = document.createElement("span");
    span.className = "task-text";
    span.textContent = allTasks[i].text;

    var del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete-btn";
    del.onclick = (function (index) {
      return function () {
        allTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        show();
      };
    })(i);

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  }
}

input.onkeypress = function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
};
