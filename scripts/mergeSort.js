function mergeSort() {
    cDelay = 0;
    mergePartition(0, arrSize - 1);
    enableButtons();
}

function mergeSortHelper(start, mid, end) {
    var p = start, q = mid + 1;
    var arr = [], k = 0;
    for (var i = start; i <= end; i++) {
        if (p > mid) {
            arr[k++] = divSize[q++];
            divUpdate(divisions[q - 1], divSize[q - 1], "#fd5973");
        } else if (q > end) {
            arr[k++] = divSize[p++];
            divUpdate(divisions[p - 1], divSize[p - 1], "#fd5973");
        } else if (divSize[p] < divSize[q]) {
            arr[k++] = divSize[p++];
            divUpdate(divisions[p - 1], divSize[p - 1], "#fd5973");
        } else {
            arr[k++] = divSize[q++];
            divUpdate(divisions[q - 1], divSize[q - 1], "#fd5973");
        }
    }
    for (var t = 0; t < k; t++) {
        divSize[start++] = arr[t];
        divUpdate(divisions[start - 1], divSize[start - 1], "#62BD69");
    }
}

function mergePartition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        divUpdate(divisions[mid], divSize[mid], "#FCF4A3");
        mergePartition(start, mid);
        mergePartition(mid + 1, end);
        mergeSortHelper(start, mid, end);
    }
}