/* STRICTLY DECREASING OR INCREASING
---------------------------------------- */
/*function check(a,b,c){
  if (a > b && b > c){
    return "Decreasing"
  }else if ( a < b && b < c){
    return "Increasing"
  }else {
    return "Neither"
  };
};
console.log(check(36,36,12)); */
  
// OR 

let arr = [1, 1, 2];
function check(arr){
  if(arr[0] > arr[1] && arr[1] > arr[2]){
    return "decreasing"
  }else if (arr[0] < arr[1] && arr[1] < arr[2]){
    return "increasing"
  }else if (arr[0]=== arr[1] || arr[1]=== arr[2] || arr[0]=== arr[2]) {
    return "neither"
  }
  else {
    return "increasing"
  };
};
console.log(check(arr));




