function heapSort() {
    cDelay = 0;
    heapSortHelper();
    enableButtons();
}

function swap(i, j) {
    divUpdate(divisions[i], divSize[i], "#fd5973");
    divUpdate(divisions[j], divSize[j], "#fd5973");
    var temp = divSize[i];
    divSize[i] = divSize[j];
    divSize[j] = temp;
    divUpdate(divisions[i], divSize[i], "#fd5973");
    divUpdate(divisions[j], divSize[j], "#fd5973");
    divUpdate(divisions[i], divSize[i], "#1982d87b;");
    divUpdate(divisions[j], divSize[j], "#1982d87b;");
}

function maxHeapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if (l < n && divSize[l] > divSize[largest]) {
        if (largest != i) {
            divUpdate(divisions[largest], divSize[largest], "#1982d87b;");
        }
        largest = l;
        divUpdate(divisions[largest], divSize[largest], "#fd5973");
    }
    if (r < n && divSize[r] > divSize[largest]) {
        if (largest != i) {
            divUpdate(divisions[largest], divSize[largest], "#1982d87b;");
        }
        largest = r;
        divUpdate(divisions[largest], divSize[largest], "#fd5973");
    }
    if (largest != i) {
        swap(i, largest);
        maxHeapify(n, largest);
    }
}

function heapSortHelper() {
    for (var i = Math.floor(arrSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arrSize, i);
    }
    for (var i = arrSize - 1; i > 0; i--) {
        swap(0, i);
        divUpdate(divisions[i], divSize[i], "#ACDF87");
        divUpdate(divisions[i], divSize[i], "#FCF4A3");
        maxHeapify(i, 0);
        divUpdate(divisions[i], divSize[i], "#1982d87b;");
        divUpdate(divisions[i], divSize[i], "#ACDF87");
    }
    divUpdate(divisions[i], divSize[i], "#ACDF87");
}