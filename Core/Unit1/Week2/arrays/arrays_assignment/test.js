let arr1 = [500, 45, 10];
let arr2 = [6, 0, -60];
let finArr = [];
let i = 0;
let j = 0;
let b = (arr1.length + arr2.length);

for (let a = 0; a < b; a++) {
  if (i > arr1.length){
    finArr.push(arr2[j]);
  }
  if (j > arr2.length) {
    finArr.push(arr1[i])
  }
  if (arr1[i] > arr2[j]) {
    finArr.push(arr1[i]);
    i += 1;
  } else {
    finArr.push(arr2[j]);
    j += 1;
  }
}

console.log(finArr);



let arr3 = [3, 0, 13, 24, 32, 0, 7, 0, 4, 0, 8];

for (let x of arr3) {
  if (x === 0) {
    arr3.splice(arr3.indexOf(x), 1);
    arr3.push(0);
  }
}

console.log(arr3);
