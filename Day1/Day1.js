//copy and pasted string from input file because I couldn't figure out how to import the way I wanted to. Example/placeholder string below.

const string1 = `
1000
2000
3000

4000`;

//print to test
//console.log(string1);

//function to turn string into array
const array = (string) => {
    return string.split(/\r?\n/)
};

const array1 = array(string1);
//console.log(array1);

//find out if blank strings in array are actually blank strings
/* const areBlank = array1.findIndex(word => {
    return (word === '')
   }); */
   
//blank string index
//console.log(areBlank); 

const doMaths = (arr) => {
    
    var nums = arr.map(function(str) {
        //using map to convert array of strings to numbers
        return parseInt(str, 10)
    });

    //print test to see conversion worked
    //console.log(nums)

    var currentGroupTotal = 0;
    var summedGroupsArray = [ ]

    const sumWithInitial = nums.reduce(
        (accumulator, currentValue) => {

            if (!isNaN(currentValue)){
              currentGroupTotal += currentValue;
            } else {
              summedGroupsArray.push(currentGroupTotal);
              currentGroupTotal = 0; // Reset for next group
            }

            return summedGroupsArray;
          });

    return sumWithInitial;

    // for (let i = 0; i < arr.length; i++) {
        
    //     if (nums[i] === '') continue;

    //     // Otherwise, if we're working on something that isn't === '' then do these things (continue will skip them otherwise):
        
    // };
};

newArray = doMaths(array1);
console.log(newArray);


//find the max number
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

maxNum = getMaxOfArray(newArray);
console.log(maxNum);

var topValues = newArray.sort((a,b) => b-a).slice(0,3);
console.log(topValues);

const sum = topValues.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);