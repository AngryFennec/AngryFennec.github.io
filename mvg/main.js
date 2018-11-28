/*let A = [
  [0, 0, 0, 0.270, 0],
  [0, 0, 0.369, 0, 0.240],
  [0, 0.369, 0, 0.292, 0],
  [0.270, 0, 0.292, 0, 0.294],
  [0, 0.240, 0, 0.294, 0]];


let initialA = [
  [0, 0.319, 0.336, 0.270, 0.270],
  [0.319, 0, 0.369, 0.369, 0.240],
  [0.336, 0.369, 0, 0.292, 0.369],
  [0.270, 0.369, 0.292, 0, 0.294],
  [0.270, 0.240, 0.369, 0.294, 0]];*/
  let inp1 = document.querySelector('.inp1');
  let inp2 = document.querySelector('.inp2');
  let inp3 = document.querySelector('.inp3');
  let inp4 = document.querySelector('.inp4');
  let btn = document.querySelector('.btn');
  btn.addEventListener('click', function () {
    size = parseInt(inp1.value);
    del = parseFloat(inp2.value);
    iter = parseInt(inp3.value);
    inp4.value = calc(size, del, iter);
  });
function calc(size, del, iter) {
let N = size;
let good = [];
let maxlvls = [];
let sims = [];

for (let t = 0; t < 1000; t++) {
  let maxlvl = 0;
  let similar = 0;
  let randM = getRandomDoubleArrray(N);
  let removedM = removeElems(randM, del);
  const initialSigma = getMatrixBadness(randM);
  console.log(initialSigma/2);

  let newTask = {
    matrix: removedM,
    sigma: initialSigma,
    kols: [],
    maxs: [],
    left: false,
    i: -1,
    j: -1,
    maxDif: -1,
    maxKol: -1,
    level: 0,
    used: []
  }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMiddle(arr) {
  console.log(arr);
  let n = arr.length;
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s = s + arr[i];
  }
  return s/n;
}

function makeSymmetric(arr, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        arr[i][j] = 0;
      }
      if (i > j) {
        arr[i][j] = arr[j][i];
      }
    }
  }
  return arr;
}

function removeElems(arr, percent) {
  let num = arr.length * arr.length;
  num = Math.floor(num*percent);
  let newArr = copyDoubleArray(arr);
  while (num > 0) {
    let randI = getRandomInt(0, arr.length - 1);
    let randJ = getRandomInt(0, arr.length - 1);
    while (randI === randJ) {
      randJ = getRandomInt(0, arr.length - 1);
    }
    newArr[randI][randJ] = 0;
    newArr[randJ][randI] = 0;
    num--;
  }
  return newArr;
}

function getRandomDoubleArrray(size, min=1, max=100, coef=1) {
  let newArr = [];
  for (let i = 0; i < size*size; i++) {
    newArr.push(getRandomInt(min, max)/coef);
  }
  let reshaped =  reshapeArray(newArr, size);
  return makeSymmetric(reshaped, size);
}



function getMaxTwo(a, b) {
  return a >= b ? a : b;
}

function assignElement(i, j, kolIj, A) {
  let newAij = A[i][j];
  for (let k = 0; k < N; k++) {
    if (k !== i && k !== j && i !== j && A[k][i] !== 0 && A[k][j] !==0) {
      newAij = newAij + getMaxTwo(A[k][i], A[k][j]);
    }
  }
  return newAij / kolIj;
}

function getKol(i, j, task) {
  let A = task.matrix;
  let kol = 0;
  for (let k = 0; k < N; k++) {
    if ( A[i][j] === 0 && k !== i && k !== j && i !== j && A[k][i] !== 0 && A[k][j] !== 0) {
      if (!isUsed(i, j, task.used) && (!task.left || (task.left && (task.i !== i || task.j !== j)))) {
        kol++;
      }
    }
  }
  return kol;
}

function getKolArray(task) {
  let newArr = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newArr.push(getKol(i, j, task));
    }
  }
  return reshapeArray(newArr, N);
}

function repairKolArray(task) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (task.kols[i][j] === 0) {
        task.kols[j][i] = 0;
      }
    }
  }
}

function getDiff(i, j, task) {
  let m = 0;
  let A = task.matrix;
  for (let k = 0; k < N; k++) {
    if (k !== i && k !== j && i !== j && A[k][i] !== 0 && A[k][j] !== 0) {
      if (!isUsed(i, j, task.used) && (!task.left || (task.left && (task.i !== i || task.j !== j)))) {
        m = getMaxTwo(m, Math.abs(A[k][i] - A[k][j]));
      }
    }
  }
  return m;
}
function getDiffArray(task) {
  let newArr = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newArr.push(getDiff(i, j, task));
    }
  }
  return reshapeArray(newArr, N);
}

function getMaxInArray(array) {
  let max = 0;
  array.forEach(item => max = item > max ? item : max);
  return max;
}

function getMaxInDoubleArray(array) {
  let max = 0;
  array.forEach(item =>  {
    let maxInItem = getMaxInArray(item);
    max = getMaxTwo(max, maxInItem)
  });
  return max;
}

function reshapeArray(array, s) { //s - количество столбцов, на которые надо разделить массив
  let newArr = [];
  for (let i = 0; i < array.length; i = i + s) {
    let newStr = [];
    for (let j = 0; j < s; j++) {
      newStr.push(array[i+j]);
    }
    newArr.push(newStr);
  }
  return newArr;
}

function isDoubleArrayNull(array) {
  let flag = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] !==0) {
        flag = false;
      }
    }
  }
  return flag;
}

function isDoubleArrayFull(array) {
  let zeros = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i][j] === 0) {
        zeros++;
      }
    }
  }
  return zeros;
}

function isArrayZero(arr) {
  s = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      s = s + Math.abs(arr[i][j]);
    }
  }
  return (s === 0) ? true : false;
}

function isArraysSimilar(arr1, arr2) {
  let flag = true;
  let flagZero = isArrayZero(arr1) && isArrayZero(arr2);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        flag = false;
        break;
      }
    }
  }
  return flag&&(!flagZero);
}

function deshapeArray(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      newStr.push(array[i][j]);
    }
  }
  return newArr;

}
function getEvristicIndex(task, kolArray, maxsArray) {
  let difArray = [];
  let maxKol = getMaxInDoubleArray(kolArray);
  for (let i = 0; i < kolArray.length; i++) {
    for (let j = i; j < kolArray.length; j++) {
      if (maxKol ===  kolArray[i][j] && !isUsed(i, j, task.used)) {
        difArray.push(maxsArray[i][j]);
      }
    }
  }
  let maxDif = getMaxInArray(difArray);
  let evr = {};
  for (let i = 0; i < maxsArray.length; i++) {
    for (let j = i; j < maxsArray.length; j++) {
      if (maxDif ===  maxsArray[i][j] && !isUsed(i, j, task.used)) {
        evr.i = i;
        evr.j = j;
        evr.m = maxDif;
        evr.kol = maxKol;
        break;
      }
    }
  }
  return evr;
}

function copyDoubleArray(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let newStr = [];
    for (let j = 0; j < array.length; j++) {
      newStr.push(array[i][j]);
    }
    newArr.push(newStr);
  }
  return newArr;
}

function getMax(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}

function getMin(a, b, c) {
  if (a < b) {
    if (a < c) {
      return a;
    }
    else {
      return c;
    }
  } else {
    if (b < c) {
      return b;
    } else {
      return c;
    }
  }
}

function isAnySimilar(arrays) {
  let flag = false;
  for (let k = 0; k < arrays.length; k++) {
    let array = arrays[k];
    for (let j = k+1; j < arrays.length; j++) {
      if (isArraysSimilar(array, arrays[j])) {
        flag = true;
        break;
      }
    }
  }
  return flag;
}

function getMiddle(a, b, c) {
  let m = getMax(a, b, c);
  let l = getMin(a, b, c);
  if (a !== m && a !== l) {
    return a;
  } else if (b !== m && b !== l) {
    return b;
  } else {
    return c;
  }
}

function copyArray(array) {
  let newArr = [];
  array.forEach(item => newArr.push(item));
  return newArr;
}

function getElemBadness(A, i, j) {
  let bad = [];
  for (let k = 0; k < N; k++) {
    if (k !== i && k !== j && j>i && A[k][i] !== 0 && A[k][j] !== 0) {
        bad.push((getMax(A[k][i], A[k][j], A[i][j]) - getMiddle(A[k][i], A[k][j], A[i][j]))/getMin(A[k][i], A[k][j], A[i][j]));
    }
  }
  return getMaxInArray(bad);
}



function getMatrixBadness(array) {
  let s = 0;
  let bad = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      s += getElemBadness(array, i, j);
      bad.push(getElemBadness(array, i, j));
    }
  }
  //console.log(reshapeArray(bad, array.length));
  return s;
}

function isUsed(i, j, array) {
  let flag = false;
  array.forEach(item => {
    if ((item.i === i && item.j === j) || (item.j === i && item.i === j)) {
      flag = true;
    }
  });
  return flag;
}

function makeRight(task) {
  let newTask = {};
  let matr = copyDoubleArray(task.matrix);
  matr[task.i][task.j] = assignElement(task.i, task.j,task.maxKol, task.matrix);
  matr[task.j][task.i] = assignElement(task.j, task.i,task.maxKol, task.matrix);
  newTask.i = -1;
  newTask.j = -1;
  newTask.level = task.level + 1;
  if (maxlvl <= newTask.level) {
    maxlvl = newTask.level;
  }
  newTask.left = false;
  newTask.used = copyArray(task.used);
  newTask.matrix = matr;
  newTask.sigma = task.sigma + getElemBadness(newTask.matrix, task.i, task.j);
  //matrixes.push(matr);
  return newTask;
}

function makeLeft(task) {
  let newTask = {};
  let matr = copyDoubleArray(task.matrix);
  newTask.i = task.i;
  newTask.left = true;
  newTask.level = task.level + 1;
  if (maxlvl <= newTask.level) {
    maxlvl = newTask.level;
  }
  newTask.used = copyArray(task.used);
  newTask.j = task.j;
  newTask.matrix = matr;
  newTask.sigma = task.sigma + getElemBadness(newTask.matrix, task.i, task.j);
  //matrixes.push(matr);
  return newTask;
}

function solve(task) {
  task.kols = getKolArray(task);
  repairKolArray(task);
  console.log(task.left + ' ' + task.i + ' ' + task.j + ' ' + task.level);
  //console.log(task.used);

  //console.log(task.matrix);
  if (!isDoubleArrayNull(task.kols)) {
    task.maxs = getDiffArray(task);
    let evr = getEvristicIndex(task, task.kols, task.maxs);
    task.i = evr.i;
    task.j = evr.j;

    task.maxDif = evr.m;
    task.maxKol = evr.kol;
    let newUsed = {
      i: evr.i,
      j: evr.j
    };
    task.used.push(newUsed);

    let right = makeRight(task);
    let left = makeLeft(task);
    //let rightBad = getMatrixBadness(right.matrix);
    //let leftBad = getMatrixBadness(left.matrix);
    let rightBad = right.sigma;
    let leftBad = left.sigma;
    if (rightBad <= leftBad && right != Infinity) {
      matrixes.push(right.matrix)
      tasks.push(right);
    }
    if (rightBad >= leftBad && left != Infinity) {
      matrixes.push(left.matrix)
      tasks.push(left);
    }
  }
}

function sumDoubleArray(array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      s = s + array[i][j];
    }
  }
  return s;
}


  let tasks = [newTask];
  let matrixes = [];
  let iterCount = iter;
  while (tasks.length !== 0 && iterCount > 0) {
    let now = tasks.pop();
    iterCount -= 1;
    solve(now);
  }


function onBtnClick() {
  console.log(tasks);
  solve(tasks.pop())
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', onBtnClick);
console.log(matrixes);

console.log(isAnySimilar(matrixes));
if (isAnySimilar(matrixes)) {
  sims.push('YES');
  similar += 1;
}
else {sims.push("NO")};
let maxMatr = 0;
let maxI = 0;
let notNull = [];
matrixes.forEach((item, i) => {if (maxMatr < sumDoubleArray(item)) {
  maxMatr = sumDoubleArray(item);
  maxI = i;
  if (isDoubleArrayFull(item) === 0) {
    notNull.push(item);
  }
}});



//console.log(notNull);
notNull.forEach((item) => console.log(getMatrixBadness(item)));
if (notNull.length !== 0) {
  good.push(notNull);
}

//maxlvls.push(maxlvl);
console.log(matrixes);
console.log(similar);
}
console.log(good);
//console.log(maxlvls);
console.log(getMaxInArray(maxlvls));
console.log(sims);

function getYes(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]==="YES") s += 1;
  }
  return s;
}
console.log(getYes(sims));
return(getYes(sims));
}
//console.log(isArraysSimilar([[1, 1,],[0, 0]], [[1, 0,],[1, 0]]))
