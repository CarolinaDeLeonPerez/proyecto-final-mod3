console.log(`${algoritmo} 7`);

let array = [5, 2, 6, 8, 9, 7]

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
    //Utilizando el algoritmo de burbuja, desglosamos los diferentes valores introducidos en el array y los ordenamos de forma ascendente.
}

console.log("sorted Array", bubbleSort(array)); // [2, 5, 6, 7, 8, 9]
