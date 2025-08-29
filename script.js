//Arrays and its methods pop push find filter map etc
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//find method
const find = arr.find((value) => {
    return value > 10;
})
console.log(find);
//filter method
const filter = arr.filter((value) => {
    return value > 10;
})
console.log(filter);
//map method
const map = arr.map((value) => {
    return value * 2;
})
console.log(map);
//reduce method
const reduce = arr.reduce((acc, value) => {
    return acc + value;
}, 0)
console.log(reduce);
//forEach
arr.forEach((value) => {
    console.log(value);
    // console.log(value * 2);
})
//slice 
// const slice = arr.slice(3, 7);
// console.log(slice);
//splice
// const splice = arr.splice(3, 5);
// console.log(splice);
// 
console.log(arr)
//flat
let arr1=[1,2,3,[1,2,3],1,2,3]
let arr2=arr1.flat()
console.log(arr2);