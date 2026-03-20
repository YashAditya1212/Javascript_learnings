const randomColor=()=>{
    const hex= "123456789ABCDEF"
    let color="#"


for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
    console.log(color)
}
return color}
let intervalId
const startChangingColor= ()=>{
    intervalId= setInterval(changeBgcolor,1000);

    function changeBgcolor(){
        document.body.style.backgroundColor=randomColor();
    }

};
const stopChangingColor = ()=>{
    clearInterval(intervalId)
}

document.getElementById("Start").addEventListener("click", startChangingColor)
document.getElementById("Stop").addEventListener("click", stopChangingColor)
   
