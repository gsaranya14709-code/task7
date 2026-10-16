let inp = document.getElementById("mission");
let add = document.getElementById("add");
let list = document.getElementById("list");
let count = document.getElementById("count");
let colour = document.getElementById("colour");
function updateCount() {
    let completed = list.querySelectorAll("completed").length;
    count.textContent = list.children.length - completed;
}
add.addEventListener("click", function() {
    let name = inp.value.trim();
    if (name == "") {
        alert("Enter Your Mission!!");
    }
    else {
        let li = document.createElement("li");
        let task = document.createElement("span");
        let del = document.createElement("button");
        task.textContent = name;
        del.textContent = "Delete";
        task.addEventListener("click", function() {
            task.classList.toggle("completed");
            updateCount();
        });
        del.addEventListener("click", function() {
            li.remove();
            updateCount();
        });
        li.appendChild(task);
        li.appendChild(del);
        list.appendChild(li);
        inp.value = "";
        updateCount();
    }
});
let colors = ["lightblue", "lightpink", "lightgreen"];
let i = 0;
colour.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
});