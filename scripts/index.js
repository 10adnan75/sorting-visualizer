var inAs = document.getElementById("a_size"), arrSize = inAs.value;
var inGen = document.getElementById("a_generate");
var inASpeed = document.getElementById("a_speed");
var butAlgo = document.querySelectorAll(".algos button");
var divSize = [];
var divisions = [];
var marginSize;
var cont = document.getElementById("array_container");

cont.style = "flex-direction:row";

inGen.addEventListener("click", generateArray);
inAs.addEventListener("input", updateArraySize);

function generateArray() {
    cont.innerHTML = "";
    for (var i = 0; i < arrSize; i++) {
        divSize[i] = Math.floor(Math.random() * 0.5 * (inAs.max - inAs.min)) + 10;
        divisions[i] = document.createElement("div");
        cont.appendChild(divisions[i]);
        marginSize = 0.1;
        divisions[i].style = " margin:0% " + marginSize + "%; background-color:#1982d87b;; width:" + (100 / arrSize - (2 * marginSize)) + "%; height:" + (divSize[i]) + "%;";
    }
}

function updateArraySize() {
    arrSize = inAs.value;
    generateArray();
}

window.onload = updateArraySize();

for (var i = 0; i < butAlgo.length; i++) {
    butAlgo[i].addEventListener("click", runAlgos);
}

function disableButtons() {
    for (var i = 0; i < butAlgo.length; i++) {
        butAlgo[i].classList = [];
        butAlgo[i].classList.add("butt_locked");
        butAlgo[i].disabled = true;
        inAs.disabled = true;
        inGen.disabled = true;
        inASpeed.disabled = true;
    }
}

function runAlgos() {
    disableButtons();
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble": bubbleSort();
            break;
        case "Selection": selectionSort();
            break;
        case "Insertion": insertionSort();
            break;
        case "Merge": mergeSort();
            break;
        case "Quick": quickSort();
            break;
        case "Heap": heapSort();
            break;
    }
}
