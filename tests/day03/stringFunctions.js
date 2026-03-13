let str = "madam"
let reverseStr = ''
for(i=str.length;i>=0;i--){
    reverseStr = reverseStr + str.charAt(i);
}
console.log(reverseStr);
if(str == reverseStr){
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}