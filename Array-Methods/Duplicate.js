// const arr=["jamshid","khan","pathan","salman","khan","pathan"]
// const result=[...new Set(arr)]
// console.log(result)




const arr=[10,5,20,10,6,5,8,20,"khan",5,"khan","89","89","89","90","90","j","88","j"]
const result=Array.from(new Set(arr))
console.log(result)




// const arr = [2, 3, 4, 5,6, 7, 8, 2, 4, 5, 6];

// const answer=arr.reduce((unique,item)=>(unique.includes(item)?unique:[...unique,item]),[])
// console.log(answer)

// const result=arr.filter((item,index)=>arr.indexOf(item)===index)
// console.log(result)





// function getoutput(arr){
//     output=[];
//     for(let i of arr){
//         if(output.indexOf(i)===-1){
//             output.push(i)
//         }
//     }
//     console.log(output)
// }
// getoutput(arr)





