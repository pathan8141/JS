let array=[10,20,30,20,50,10,30]
console.log([...new Set(array)])

let array2=array.filter((item,index)=>{
    return array.indexOf(item)===index
})
console.log(array2)


const arr=[4,5,6,7,1,2,3]
const result=arr.sort()
console.log(result)
const aqib=result.reverse()
console.log(aqib)
