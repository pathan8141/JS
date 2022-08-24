var array=[12,548,"a",2,548,"foo",8852,"Deo",2145,119] 
          var randomSum = array.map(function(a){
            return parseInt(a, 10);
          }).filter(function(b) {
            return  b > 0;
          }).reduce(function(add, c) {
            return add + c;
          }, 0);
          console.log(randomSum)

