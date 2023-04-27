# A web-based sorting algorithm visualization tool

*author: @10adnan75*

Sorting algorithms are employed to arrange a data structure in accordance with a certain order relationship, such as lexical or numerical order.

In the field of computer science, this procedure is among the most significant and common. New techniques have been created for a very long period to make this process increasingly quicker.

There are presently hundreds of distinct sorting algorithms, each with unique properties. Space complexity and time-based complexity are the two criteria used to characterize them.

Both of these types of complexity are specified using *asymptotic notations*, primarily with the symbols *O*, *Θ*, and *Ω*, which stand for the upper bound, tight bound, and lower bound of the complexity of the algorithm, respectively, and are followed by an expression in terms of n, the number of data structure elements.

In general, they can be divided into two groups:

- Logarithmic

  The complexity is proportional to the binary logarithm (i.e to the base 2) of n. Quick sort, with its space and time complexity of *O(n log n)*, is an illustration of a logarithmic sorting algorithm.

- Quadratic

  The complexity grows as n squared. The quadratic sorting method Bubble sort has an *O(n²)* time complexity.

The three scenarios of best case, average case, and worst case additionally represent potential subdivisions of space and time complexity.

Sorting algorithms can be confusing and challenging to comprehend. Inevitably, visualizing sorting algorithms can be a really engaging method to learn more about how they work.

---

## Merge Sort

Merge Sort is a sorting algorithm that uses the Divide and Conquer method. Using the Top-Down and Bottom-Up techniques, it can be implemented iteratively or recursively.

- Time complexity: *O(n log n)*

- Space complexity: *O(n)*

<sub>Algorithm:</sub>

    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];
        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
        int i = 0, j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void sort(int arr[], int l, int r) {
        if (l < r) {
            int m =l+ (r-l)/2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

---

## Selection Sort

---

## Quick Sort

---

## Insertion Sort

---

## Bubble Sort

---

## Heap Sort
