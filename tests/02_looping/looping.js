/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let factorial =1

  for (let i=1; i<=num; i++){
    factorial *= i
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
  if (originalString===undefined){
    return originalString
  }
  // if (startIdx===undefined){
  //   startIdx=''
  // }
  // if (endIdx===undefined){
  //   endIdx=''
  // }


}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
