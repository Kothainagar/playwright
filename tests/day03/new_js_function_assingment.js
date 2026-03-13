//function declaration
function userprofile(name){
    console.log("Hello " + name + "!");
}
userprofile("Alice");

//Arrow function
const double = x => x * x;
console.log(double(5));

//Anonymous function
const anonymousFunction = function(){
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds");
    },2000);
}
anonymousFunction();

//callback function
function getUserData(onCallback){
    setTimeout(() => {
        const userData = {name:"John", age:30};
        onCallback(userData);
    },3000);
}

function callback(data){
    console.log("Callback function executed");
    console.log(data);
}

getUserData(callback);