let username = "Alice";

if (true) {
    let username = "Bob";   // different variable inside block
    console.log(username);
}

console.log(username);

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Weekend");
}