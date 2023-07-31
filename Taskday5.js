

//Print odd numbers in an array using anonymous function
/*let arr = [1,2,3,4,5,6,7,8,9,11];
let oddNumber = function(value)
{
return value %2==0;
}
console.log(arr.filter(oddNumber))*/

/*----------------------------------------------------*/

/*Print odd numbers in an array using IIFE
let temp=[];
 (function(array){
   for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                temp.push(array[i]);
                } 
              }
          console.log(temp);
    })([1,2,3,4,5,6,7,8,9,11])*/
   
/*----------------------------------------------------*/
//Print odd numbers in an array using arrow function

/*let arr = [1,2,3,4,5,6,7,8,9,11];
let oddNumber = (value) =>{
    return value %2!=0;
}
console.log(arr.filter(oddNumber));*/

//-----------------------------------------------------------------

/*Convert all the strings to title caps in a string array using IIFE
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
    return str;
})(("MY NAME IS RAJA GOPI"));*/

//--------------------------------------------------------------------------

/*Convert all the strings to title caps in a string using Arrow function
let titleCaps = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
    return str;
};titleCaps((" MY NAME IS RAJAGOPI"));

//----------------------------------------------------------------------

/*Sum of all numbers in an array using anonymous function
var sum = 0;
let Total=function(array){
    
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
     
  };Total([1,2,3,4,5,6]);
  console.log("Array Total:"+sum);*/

//-----------------------------------------------------------------
/*Sum of all numbers in an array using IIFE
  var sum = 0;
  (function(array){
      
      for(var i = 0 ; i< array.length ; i++){
         sum = sum + array[i];
       }
       return sum;
    })(([1,2,3,4,5,6]));
    console.log("Array Total:"+sum);*/
 //------------------------------------------------------------

 /*Sum of all numbers in an array using Arrow function
var sum =0
 let sumvalue = (array) =>{
    for(var i = 0 ; i< array.length ; i++){
        sum = sum + array[i];
      }
      return sum;
 };console.log(sumvalue([1,2,3,4,5,6]));
 
//---------------------------------------------------------------------

// Return all the prime numbers in an array using anonymous function
/*let prime=function(numArray)
{
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
         }
             return true;
       });
        console.log(numArray);
};prime([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);*/

//-------------------------------------------------------------------------------

// Return all the prime numbers in an array using IIFE 
/*(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);*/
//---------------------------------------------------------------
/*let duplicates = (numArray) => 
{
    numArray = numArray.filter((number) => 
    {
        for (var i = 2; i <= Math.sqrt(number); i++) 
        {
          if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
};duplicates([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);
//-------------------------------------------------------------------
   /*Remove duplicates from an array using anonymous function 
   let med = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  };med([1,2,3,4,2,3,5,7]);*/

//---------------------------------------------------------------------

/*Remove duplicates from an array using IIFE
  (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4]);*/

/*Remove duplicates from an array using Arrow

   let med = (array) => {
    let dup = [...new Set(array)];
    console.log(dup);
   };med([1,2,3,4,2,3,5,7]);*/


