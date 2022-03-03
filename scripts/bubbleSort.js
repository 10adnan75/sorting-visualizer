function bubbleSort() {
    cDelay = 0;
    for (var i = 0; i < arrSize - 1; i++) {
        for (var j = 0; j < arrSize - i - 1; j++) {
            divUpdate(divisions[j], divSize[j], "#FCF4A3");
            if (divSize[j] > divSize[j + 1]) {
                divUpdate(divisions[j], divSize[j], "#fd5973");
                divUpdate(divisions[j + 1], divSize[j + 1], "#fd5973");
                var temp = divSize[j];
                divSize[j] = divSize[j + 1];
                divSize[j + 1] = temp;
                divUpdate(divisions[j], divSize[j], "#fd5973");
                divUpdate(divisions[j + 1], divSize[j + 1], "#fd5973");
            }
            divUpdate(divisions[j], divSize[j], "#1982d87b;");
        }
        divUpdate(divisions[j], divSize[j], "#62BD69");
    }
    divUpdate(divisions[0], divSize[0], "#62BD69");
    enableButtons();
}
