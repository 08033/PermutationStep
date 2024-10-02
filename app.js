//console.log("Hello XD");
//Ch3: Permutation Step

/*function PermutationStep(num) { 

  // code goes here  
  return num; 

}
   
// keep this function call here 
console.log(PermutationStep(readline()));
*/

//-----------------------------------------
/*
Example:
Input: 11121
Output: 11211

Input:41352
Output:41523
*/ 
//----------
  function permutationStep(num) {
    let string = String(num);
    if (string.length === 1) {
        return -1;
    }
    for (let i = string.length - 2; i >= 0; i--) {
        if (string[i] < string[i + 1]) {
            return parseInt(string.slice(0, i) + string[i + 1] + string[i]);
        }
    }
    return -1;
}
//----------
  
  console.log('Before: 999 | After: ' + permutationStep(999));
  console.log('Before: 123 | After: ' + permutationStep(123));
  console.log('Before: 12534 | After: ' + permutationStep(12534));
  console.log('Before: 11121 | After: ' + permutationStep(11121));
  console.log('Before: 41352 | After: ' + permutationStep(41352));

//------------------
/*
Reference:
1- https://github.com/Camsbury/coderbyte/blob/master/permutations_step.py
*/