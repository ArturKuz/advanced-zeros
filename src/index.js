module.exports = function getZerosCount(number, base) {
 
  const arr = [];
  let j = 2;
  let d = 0;
  // simple numbers in base
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
  //  splice arr
  let counter = 1;
  for(var i = 0; i < arr.length; i++) {
      while (arr[i]==arr[i+1]) {
        counter++;        
        arr.splice(i+1, 1);
      }
   
  }

  // power of simple numb in base
  let arrRes = [];

  for(let i = 0; i < arr.length; i++) {
    let step = arr[i];
    let count=0;
    let res = 1;
      
      while ( res >= 1) {
        
      res = number/step;
      count += Math.floor(number/step);
      step *= arr[i];        
      }      
    
    arrRes.push(count);
    
  }
  // min power
  const min = Math.min(...arrRes)
  console.log(min)
  return min;
  
}