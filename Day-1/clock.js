console.log("The line below is the clock");
setInterval(function(){
    clock()
},1000);
function clock(){

    let clockobj= new Date();
    let hours= clockobj.getHours();
    let mminutes= clockobj.getMinutes();
    let seconds= clockobj.getSeconds();
    let miliseconds= clockobj.getMilliseconds();
    
     process.stdout.write("The current time is "+ hours +":"+ mminutes+":"+seconds);
     process.stdout.cursorTo(0);
     setTimeout(function(){
        process.stdout.clearLine();
     },800);
    
}
