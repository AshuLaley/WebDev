var counter = 0;
function add(){
    var task = document.getElementById("input-task").value;
    var tasks= document.getElementById("tasks");

    tasks.innerHTML+=`<div class="ind-task" id="${++counter}">
        <div>
            <input type="text" value='${task}' disabled="true" class="edit-task" id="edit-${counter}">
        </div>
        <div id="task-buttons">
            <button onClick="editTask(${counter})">
                <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png">
            <button>
            <button onClick="deleteTask(${counter})">
                <img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png">
            <button>
        </div>
    </div>
`;

}


function deleteTask(targetId){
    document.getElementById(targetId).innerHTML = "";
}

var counter = 0;
function add(){
    var task = document.getElementById("input-task").value;
    var tasks= document.getElementById("tasks");

    tasks.innerHTML+=`<div class="ind-task" id="${++counter}">
        <div>
            <input type="text" value='${task}' disabled="true" class="edit-task" id="edit-${counter}">
        </div>
        <div id="task-buttons">
            <button onClick="editTask(${counter})">
                <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png">
            <button>
            <button onClick="deleteTask(${counter})">
                <img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png">
            <button>
        </div>
    </div>
`;

}


function deleteTask(targetId){
    document.getElementById(targetId).innerHTML = "";
}

function editTask(x){
    document.getElementById(`edit-${x}`).disabled = false;
}
