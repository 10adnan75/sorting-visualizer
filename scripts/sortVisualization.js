var speed = 1000;

inASpeed.addEventListener("input", visualSpeed);

function visualSpeed() {
    var arrSpeed = inASpeed.value;
    switch (parseInt(arrSpeed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }
    delayTime = 10000 / (Math.floor(arrSize / 10) * speed);
}

var delayTime = 10000 / (Math.floor(arrSize / 10) * speed);
var cDelay = 0;

function divUpdate(cont, height, color) {
    window.setTimeout(function () {
        cont.style = " margin:0% " + marginSize + "%; width:" + (100 / arrSize - (2 * marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, cDelay += delayTime);
}

function enableButtons() {
    window.setTimeout(function () {
        for (var i = 0; i < butAlgo.length; i++) {
            butAlgo[i].classList = [];
            butAlgo[i].classList.add("butt_unselected");
            butAlgo[i].disabled = false;
            inAs.disabled = false;
            inGen.disabled = false;
            inASpeed.disabled = false;
        }
    }, cDelay += delayTime);
}
