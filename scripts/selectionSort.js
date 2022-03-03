function selectionSort() {
    cDelay = 0;
    for (var i = 0; i < arrSize - 1; i++) {
        divUpdate(divisions[i], divSize[i], "#fd5973");
        indexMin = i;
        for (var j = i + 1; j < arrSize; j++) {
            divUpdate(divisions[j], divSize[j], "#FCF4A3");
            if (divSize[j] < divSize[indexMin]) {
                if (indexMin != i) {
                    divUpdate(divisions[indexMin], divSize[indexMin], "#1982d87b;");
                }
                indexMin = j;
                divUpdate(divisions[indexMin], divSize[indexMin], "#fd5973");
            } else {
                divUpdate(divisions[j], divSize[j], "#1982d87b;");
            }
        }
        if (indexMin != i) {
            var temp = divSize[indexMin];
            divSize[indexMin] = divSize[i];
            divSize[i] = temp;
            divUpdate(divisions[indexMin], divSize[indexMin], "#fd5973");
            divUpdate(divisions[i], divSize[i], "#fd5973");
            divUpdate(divisions[indexMin], divSize[indexMin], "#1982d87b;");
        }
        divUpdate(divisions[i], divSize[i], "#62BD69");
    }
    divUpdate(divisions[i], divSize[i], "#62BD69");
    enableButtons();
}