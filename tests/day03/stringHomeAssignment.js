s = "Hello World"
//return the lenght of the lastword in the string
const lastword = s.split(" ")
console.log("The last word is \"" + lastword[lastword.length - 1] + "\" with length " + lastword[lastword.length - 1].length);

s = "fly me  to  the moon "
//trim and return the length of the last word and length in the string
const trimedString = s.trim()
const lastword2 = trimedString.split(" ")
console.log("The last word is \"" + lastword2[lastword2.length - 1] + "\" with length " + lastword2[lastword2.length - 1].length);

//write a function to check if the strings are anagrams
function isAnagrams(str1, str2){
    // convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Sort characters and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("hello", "world")); // false