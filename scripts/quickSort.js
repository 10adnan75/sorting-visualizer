function quickSort() {
    cDelay = 0;
    quickSortHelper(0, arrSize - 1);
    enableButtons();
}

function quickPartition(start, end) {
    var i = start + 1;
    var pivot = divSize[start];
    divUpdate(divisions[start], divSize[start], "#FCF4A3");
    for (var j = start + 1; j <= end; j++) {
        if (divSize[j] < pivot) {
            divUpdate(divisions[j], divSize[j], "#FCF4A3");
            divUpdate(divisions[i], divSize[i], "#fd5973");
            divUpdate(divisions[j], divSize[j], "#fd5973");
            var temp = divSize[i];
            divSize[i] = divSize[j];
            divSize[j] = temp;
            divUpdate(divisions[i], divSize[i], "#fd5973");
            divUpdate(divisions[j], divSize[j], "#fd5973");
            divUpdate(divisions[i], divSize[i], "#1982d87b;");
            divUpdate(divisions[j], divSize[j], "#1982d87b;");
            i += 1;
        }
    }
    divUpdate(divisions[start], divSize[start], "#fd5973");
    divUpdate(divisions[i - 1], divSize[i - 1], "#fd5973");
    var temp = divSize[start];
    divSize[start] = divSize[i - 1];
    divSize[i - 1] = temp;
    divUpdate(divisions[start], divSize[start], "#fd5973");
    divUpdate(divisions[i - 1], divSize[i - 1], "#fd5973");
    for (var t = start; t <= i; t++) {
        divUpdate(divisions[t], divSize[t], "#62BD69");
    }
    return i - 1;
}

function quickSortHelper(start, end) {
    if (start < end) {
        var pivotElement = quickPartition(start, end);
        quickSortHelper(start, pivotElement - 1);
        quickSortHelper(pivotElement + 1, end);
    }
}