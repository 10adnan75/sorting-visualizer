function insertionSort() {
    cDelay = 0;
    for (var j = 0; j < arrSize; j++) {
        divUpdate(divisions[j], divSize[j], "#FCF4A3");
        var key = divSize[j];
        var i = j - 1;
        while (i >= 0 && divSize[i] > key) {
            divUpdate(divisions[i], divSize[i], "#fd5973");
            divUpdate(divisions[i + 1], divSize[i + 1], "#fd5973");
            divSize[i + 1] = divSize[i];
            divUpdate(divisions[i], divSize[i], "#fd5973");
            divUpdate(divisions[i + 1], divSize[i + 1], "#fd5973");
            divUpdate(divisions[i], divSize[i], "#1982d87b;");
            if (i == (j - 1)) {
                divUpdate(divisions[i + 1], divSize[i + 1], "#FCF4A3");
            } else {
                divUpdate(divisions[i + 1], divSize[i + 1], "#1982d87b;");
            }
            i -= 1;
        }
        divSize[i + 1] = key;
        for (var t = 0; t < j; t++) {
            divUpdate(divisions[t], divSize[t], "#ACDF87");
        }
    }
    divUpdate(divisions[j - 1], divSize[j - 1], "#ACDF87");
    enableButtons();
}