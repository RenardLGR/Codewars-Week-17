const hi = 'HELLO'
const alphaL = 'abcdefghijklmnopqrstuvwxyz'
const alphaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// https://www.codewars.com/kata/59ad7d2e07157af687000070/train/javascript
// Your friend Robbie has successfully created an AI that is capable of communicating in English!

// Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

// ["this","is","a","sentence"]
// Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

// Your function should:

// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.
// Here are a few examples of what your function should do:

// Input	Output
// ["i", "am", "an", "AI"]	"I am an AI."
// ["FIELDS","of","CORN","are","to","be","sown"]	"FIELDS of CORN are to be sown."
// ["i'm","afraid","I","can't","let","you","do","that"]	"I'm afraid I can't let you do that."

function sentencify(words) {
    let result = words.join(' ')
    result = result.charAt(0).toUpperCase() + result.slice(1)
    result=result+'.'
    return result
}
  
//console.log(sentencify(["i'm","afraid","I","can't","let","you","do","that"]));

//=================================================================================
// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

function meeting(x){
    return x.includes('O') ? x.indexOf('O') : "None available!";
}



//==============================================================================
// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript
// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

function containAllRots(strng, arr) {
    if(strng.length===0) {
        return true
    }else {
        let strngCpy = strng
        let iterator = 0
        let counter = 0

        while(iterator<strng.length) {
            if(arr.includes(strngCpy)) {
                counter++
            }
            strngCpy = strngCpy.slice(1)+strngCpy.charAt(0) //rotate
            iterator++
        }

        return counter===strng.length
    }
}

//============================================================================
// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

function validateWord(s){
    let arr=s.split('')
    let freq = {}

    for(let elem of arr){
        //creates an object with elem (single letter) as keys and their appearances as values
        if(freq.hasOwnProperty(elem.toLowerCase())) {
            freq[elem.toLowerCase()]++
        }else {
            freq[elem.toLowerCase()]=1
        }
    }

    //creates an array with all the values of precedent object
    let arr2 = []
    for(let key in freq) {
        arr2.push(freq[key])
    }

    //checks if every values are equal
    return arr2.every(val => val === arr2[0]);

    //OR I create a set of the values and that set should be of 1 length, assuming the input has a length>0
    //return new Set(Object.values(freq)).size == 1

}

//============================================================================
// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
    let arr = a.map(elem => alphaU[elem-1])
    if(arr.includes('B') && arr.includes('I') && arr.includes('N') && arr.includes('G') && arr.includes('O')) {
        return 'LOSE'
    } else {
        return 'WIN'
    }
}

//console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

//===========================================================================
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    if(list.length===0) {
        return 0
    } else {
        let min = Math.min(...list)
        let max = Math.max(...list)
    
        return max-min
    }
};

//=============================================================================
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
    //basically find how many d in [0,9] appears in the list 0**2 , 1**2 , 2**2 , ... , n**2

    let squares = []
    for (let i = 0; i<=n; i++) {
        squares.push(i**2)
    }
    squares=squares.map(element => element.toString().split('').filter(dig=>dig==d).join(''))
    //[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100] => ['', '1', '', '', '1', '', '', '', '', '1', '1']

    return squares.reduce((acc, cur) => acc+cur.length, 0)
}

//console.log(nbDig(10, 1));

function nbDigBis(n, d) {
    let str=''
    for (let i = 0; i <= n ; i++) {
        str+=i**2
    }

    return str.split(d).length-1
}

//===============================================================================
// https://www.codewars.com/kata/5697fb83f41965761f000052
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(word => word.length>n)
}

//=================================================================================
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

//================================================================================
// https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
    let arrX = x.split('')
    let arrY = y.split('')
    //could merge these 4 into 2...
    let powerX = arrX.reduce( (acc, let) => acc+alphaU.indexOf(let)+1, 0)
    let powerY = arrY.reduce( (acc, let) => acc+alphaU.indexOf(let)+1, 0)

    if(powerX===powerY) {
        return 'Tie!'
    } else if(powerX>powerY) {
        return x
    } else {
        return y
    }
}

//==============================================================================
// https://www.codewars.com/kata/56b7f2f3f18876033f000307
// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

function inAscOrder(arr) {
    if(arr.length===1) {
        return true
    }else{
        let i = 0
        let counter = 0
        while(arr[i]<arr[i+1] && i<arr.length-1) {
            i++
            counter++
        }
        return counter===arr.length-1
    }
}

function inAscOrderBis(arr) {
    for(let i= 0; i < arr.length-1 ; i++) {
        if(arr[i]>arr[i+1]) {
            return false
        }
        return true
    }
}

//==================================================================================
// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript
// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// reverseEq("100*b/y") = "y/b*100"
// reverseEq("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.

function reverseEq(eq){
    let arr = eq.split('')

    let result= []
    let temp=''
    for(let i=0; i < arr.length; i++) {
        if(arr[i]==='*' || arr[i]==='+' || arr[i]==='-' || arr[i]==='/') {
            result.push(temp)
            result.push(arr[i])
            temp=''
        }else {
            temp+=arr[i]
        }
    }
    result.push(temp) //don't forget the last element !

    //console.log(result);

    return result.reverse().join('')
}

// console.log(reverseEq("100*b/y"));
// console.log(reverseEq("a+b-c/d*30"));

//=================================================================================
// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan", 
//   "Dancer Moore", 
//   "Prancer Chua", 
//   "Vixen Hall", 
//   "Comet Karavani",        
//   "Cupid Foroutan", 
//   "Donder Jonker", 
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan", 
//   "Vixen Hall", 
//   "Donder Jonker", 
//   "Comet Karavani",
//   "Dancer Moore", 
//   "Dasher Tonoyan",
// ]

function sortReindeer(reindeerNames) {
    return reindeerNames.sort( (a, b) => {
        return a.split(' ')[1] < b.split(' ')[1] ? -1 : 1
        // return a.split(' ')[1].localeCompare(b.split(' ')[1])
    })
}

//===============================================================================
// https://www.codewars.com/kata/5596700a386158e3aa000011/train/javascript
// Given two numbers m and n, such that 0 ≤ m ≤ n :

// convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string
// Example
// 1, 4  -->  1111010

// because:
//     1  // 1 in binary is 1
// +  10  // 2 in binary is 10
// +  11  // 3 in binary is 11
// + 100  // 4 in binary is 100
// -----
//   122  // 122 in binary is 1111010

function binaryPyramid(m,n){
    let array = [];
    for (let i=m ; i<=n ; i++){
        array.push(i.toString(2))
    }

    return array.reduce( (acc, cur) => acc+parseInt(cur),0).toString(2)
}

//===============================================================================
// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript
// One fine day while ploughing the fields, Farmer Arepo found a stone tablet with symbols carved on it... he knew such artifacts may show a message in four directions, so he wisely kept it and resumed turning the soil. He found more tablets, but with crops to sow he had no time to decipher them.

// Your Task
// Please help Farmer Arepo by inspecting each tablet to discern whether or not it shows a Sator Square!
//https://en.wikipedia.org/wiki/Sator_Square

// The Square
// is a two-dimentional palindrome (made from words of equal length)

// observes four symmetries: identity, 180-degree rotation, and two diagonal reflections

// can be read:

// left-to-right (across)
// top-to-bottom (down)
// bottom-to-top (up)
// right-to-left (reverse)
// can be rotated 180 degrees and all words still read in all directions

// is exemplified here in how to read a word ("TUBA") in the four ways:

//                          down
//                           v
//            B A T S    B A T S    B A T S    B A T S
//            A B U T    A B U T    A B U T    A B U T < reverse
//   across > T U B A    T U B A    T U B A    T U B A
//            S T A B    S T A B    S T A B    S T A B
//                                    ^
//                                    up
// Some Details
// tablet (square) dimensions range from 2x2 to 33x33 inclusive
// characters range from ascii ordinals 33 to 126 inclusive
// tablets may contain characters that look similar yet are different
// you are not permitted to mutate the input
// Input
// tablet  //  a 2D char list (2 <= n <= 33)
// Output
// true or false  //  whether or not the tablet is a sator square

function isSatorSquare(tablet) {
    let length = tablet.length
    let result = true;
    for(let i=0 ; i<length ; i++) {
        for (let j=0 ; j<length ; j++) {
            if((tablet[i][j] !== tablet[length-i-1][length-j-1]) || (tablet[j][i] !== tablet[i][j])) {
                result = false
            }
        }
    }
  return result
}

//==============================================================================
// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript
// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

// If the string matches, return true else false.

// For example:
// sringMatch("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
// sringMatch("codewars","codewars") = true, because the strings already match.
// sringMatch("a","b") = false
// sringMatch("*", "codewars") = true

function stringMatch(a,b){
    if(a.includes('*')) {
        let arr=a.split('*')
        // '*'.split('*') => ['', '']
        for (let i=0 ; i<b.length ; i++) {
            for(let j=i ; j<=b.length ; j++) {
                if(arr.join(b.slice(i,j)) === b) {
                    return true
                }
            }
        }
        return false
    } else {
        return a===b
    }
}

//It seems to work but time complexity was off the roof for very long strings


function stringMatchBis(a,b){
    let asterix = a.split('*')
    if (asterix.length === 1){ return a === b } //that means no asterisks were found

    return b.startsWith(asterix[0]) && b.endsWith(asterix[1]) && a.length <= b.length+1
}

//console.log(stringMatchBis('aaa*aaa' , 'aaa'));

//==============================================================================
