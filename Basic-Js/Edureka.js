// // Code 1:

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// // Code 2:

function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}runFunc()
// runFunc();

// // Code 3:

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// Code 1:

// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();
  
  // Code 2:
  
//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();
  
//   // Code 3:
  
//   (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();


// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 


// Code 1

// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }
  
//   let getPower = hero.getPower;
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower());
//   console.log(getPower.apply(hero2));
  


//   // Code 2
  
//   const a = function(){
//     console.log(this);
  
//     const b = {
//       func1: function(){
//         console.log(this);
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log(this);
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();
  


//   // Code 3
  
//   const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name);
//       (function(){
//         console.log(this.name);
//         console.log(self.name);
//       })();
//     }
//   }
//   b.f();


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }


// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
// console.log(Object.keys(obj));

// Method 2 Converts the Values to Array using - Object.values()
// console.log(Object.values(obj));

// Method 3 Converts both keys and values using - Object.entries()
// console.log(Object.entries(obj))






