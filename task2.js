function gerRandomArbitrary(min, max) {
    return Math.trunc(Math.random()*(min - max) + min);
}

function PrintArray(n,arr) {
    i = 0
    while(i<=n-1) {
        console.log(arr[i]);
        i++;
    }
}

//m - столбцы n - строки
let m = 4, n = 6, arr = Array();

for (let i = 0; i<n; i++) {
    arr.push([]);
    for (let j = 0; j < m; j++) {
        arr[i][j] = gerRandomArbitrary(-10, 10);
    }
}
console.log('Изначальный массив:');
PrintArray(n,arr);

let k = gerRandomArbitrary(1,n);
arr.splice(k-1,1);

console.log('--------------------------------');
console.log('K= '+k);
console.log();
console.log('Конечный массив:');
PrintArray(n,arr);