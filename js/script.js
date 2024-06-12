let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById("reset-btn");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
saveEl.textContent = "Previous boards: "
document.body.append(saveEl);

let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
};

function save(){
    let countStr = count + " ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
};

function reset(){
    count = 0;
    saveEl.textContent = "Previous boards: "
};


incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);



