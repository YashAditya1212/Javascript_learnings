const clock = document.getElementById("clock")

setInterval( (time) =>{
    let date =new Date();
    clock.innerHTML = date.toLocaleTimeString();

},1000)
