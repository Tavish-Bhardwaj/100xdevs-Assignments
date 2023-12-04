// Calculate the time it takes between a setTimeout call and the inner function actually running

console.log("Hello World this is the first staement");

console.log("This is the statement before setTimout block")
let startdate = new Date();
console.log(startdate.getSeconds() + " " + startdate.getMilliseconds());

function printstatment(value) {

    const thisdate = new Date();
    console.log(thisdate.getSeconds() + " " + thisdate.getMilliseconds());
    console.log("This statement is in the setTimeout block execution");
    let fialtime = thisdate.getMilliseconds()
    console.log(thisdate.getMilliseconds() - value);
}

let initialtime = startdate.getMilliseconds();
setTimeout(function () {
    printstatment(initialtime)
}, 1000);

console.log("This statement is after block but executed first")


