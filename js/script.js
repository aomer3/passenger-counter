let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
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
}


incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);


