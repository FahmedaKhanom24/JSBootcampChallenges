/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let factorial =1

  for (let i=1; i<=num; i++){
    factorial = factorial * i
  }
  return factorial
}

function stringReverse(str) {
  let backwardstr= ''
  for (let i=str.length-1;i>=0;i--){
    backwardstr +=str[i]
  }
  return backwardstr
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  
  if (startIdx=== undefined){
    return originalString
  }

  if (endIdx===undefined){
    endIdx = originalString.length
  }
  let string1 =''
  for (i=startIdx; i< endIdx; i++){
    string1 += originalString[i]
  }

  return string1
}

function addTheEvens(num) {
  let total =0
  for (let i=0; i<=num; i+=2){
    total +=i
  }
  return total

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
