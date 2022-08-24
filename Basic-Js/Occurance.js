// const arr=[2,3,2,5,4,3,4,5,6,7,8,9]

// const obj={};

// arr.forEach(item=>{
//     obj[item]=obj[item]?obj[item]+1:1
// })
// console.log(obj)

const aqib=[2,3,4,3,4,5,6,2,8,9,6,,7,8,9]
const obj={}
aqib.forEach((item)=>{
    obj[item]=obj[item]?obj[item]+1:1
})
console.log(obj)