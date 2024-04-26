
// 1-task 



// var search = function(matrix, target) {
//     if (matrix.length === 0 || matrix[0].length === 0) {
//         return false;
//     }

//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let row = 0;
//     let col = cols - 1;

//     while (row < rows && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true
//         } else if (matrix[row][col] < target) {
//             row++
//         } else {
//             col--
//         }
//     }

//     return false;
// };

// let matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// console.log(search(matrix1, 3))
// console.log(search(matrix1, 13))



// 2-task 


// let title  = "NAJOT ta'lim is the best";
// let input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// let array = []


// let slices = [ [19,24], [3,9], [49,51], [44,47], [60,64] ]


// slices.forEach(slice => {
//     let array_2 = input.slice(slice[0], slice[1]);
//     array.push(array_2);
// })


// console.log(array);



// 3-task 



// var rotate = function(title) {
//     const n = title.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [title[i][j], title[j][i]] = [title[j][i], title[i][j]];
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         title[i].reverse();
//     }

//     return title;
// };

// let title_1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// console.log(rotate(title_1))

// let title_2 = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(rotate(title_2))


// 4-task 


// let str = "Sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping.";

// let Str_1 = str.trim();

// let str_2 = Str_1.lastIndexOf(' ');
// let substing = Str_1.substring(str_2 + 1);

// console.log(substing.length)


// 5-task 


// var isindex = function(p, q) {
//     if (p.length !== q.length) return false;

//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) return false;
//     }

//     return true;
// };

// let p1 = [1,2,3];
// let q1 = [1,2,3];
// console.log(isindex(p1, q1))
// let p2 = [1,2];
// let q2 = [1,null,2];
// console.log(isindex(p2, q2))

// let p3 = [1,2,1];
// let q3 = [1,1,2];
// console.log(isindex(p3, q3))


// 6-task 


// let obj_arr = function(obj) {
//     let entries = Object.entries(obj);

//     let result = entries.map(([key, value]) => key + value);

//     return result;
// };

// let inputObj = {a: 2, b: 5, c: 7};
// console.log(obj_arr(inputObj))



// 7-task 


// let fn_num = function(nums1, nums2) {
//     let Array = nums1.concat(nums2).sort((a, b) => a - b);

//     let length = Array.length;
//     if (length % 2 !== 0) {
//         return Array[Math.floor(length / 2)];
//     } else {
//         let midIndex = length / 2;
//         return (Array[midIndex - 1] + Array[midIndex]) / 2;
//     }
// };

// let num1 = [1, 2];
// let num2 = [3, 4];
// console.log(fn_num(num1, num2))



// 8-task 


// function number(array) {
//     let title = [];

//     let counts = {};
//     for (let item of array) {
//         counts[item] = (counts[item] || 0) + 1;
        
//         if (counts[item] > 1) {
//             title.push(item);
//         }
//     }

//     return title;
// }

// let Array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6];
// let x_result = number(Array);
// console.log(x_result)


// tugatildi.