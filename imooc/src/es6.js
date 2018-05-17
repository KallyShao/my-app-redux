/*
 * @Author: Administrator
 * @Date:   2018-05-11 17:24:35
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-05-17 22:05:25
 */

// let obj = {
//  name: 'kally',
//  age: 18
// }
// let obj1 = {
//  name1: 'aa',
//  ...obj
// };
// console.log(obj1);

// export const name = 'imooc';


// export default function course() {
//     console.log('hello kally');
// }

// let arr = [2, 3, 4].every(v => v > 3); //是否所有元素都 >3
// console.log(arr) //false

// let arr = [2, 3, 4].some(v => v > 3); //是否有元素 >3
// console.log(arr) //true

// let arr = [2, 9, 1, 2].filter(v => v > 1); //过滤大于1的元素
// console.log(arr);

// let arr = [9, 1, 2].indexOf(2); // 查找元素第一次出现的索引
// console.log(arr);

// let arr1 = ['a', 8, 'c'];
// let arr2 = [0, 89];
// let arr = [...arr1, ...arr2];  //连接数组
// console.log(arr);

// let arr = [3, 3, 34, 2, 1, 1, 1, 0];
// let arr1 = [...new Set(arr)]; //数组去重
// console.log(arr1);

let obj = {
    name: 'imooc',
    age: 3
};
let obj1 = {
    ...obj,
    job: 'it',
    age: 18
};
console.log(obj1);