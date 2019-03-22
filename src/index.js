module.exports = function getZerosCount(number, base) {
 
  var j = 2;
  var d = 0;
  var counter = 1;
  var record = 0;
  var a;
  var arr = [];

while(j<=base) {
    while(base%j==0) {
      base = base/j;
      arr[d] = j;
      d++;
      if(base==1) {
        break;
      }
    }
    j++;
  }

  for(var i = 0; i < arr.length; i++) {
      while (arr[i]==arr[i+1]) {
        counter++;
        record = arr[i];
        arr.splice(i+1, 1);
      }
   
  }
//   for (let h = 0; base/h >= 1; h *= base)
//     counter += Math.floor(base/h);
//   return counter;

let arrRes = [];
let res
  for(var i = 0; i < arr.length; i++) {
      while ( res >= 1) {
       
        res = number/arr[i]   
        counter += Math.floor(number/arr[i]);        
      }      
    arrRes.push(counter);
  }
  return Math.min(arrRes);
  
}