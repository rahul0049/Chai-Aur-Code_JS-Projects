//generate a random color using hex values
const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
        const ran=Math.floor(Math.random()*16)
        color+=hex[ran];
    }
    return color;
}
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
let intervalId

const startChangingColor=function(){
    if(!intervalId){intervalId=setInterval(changebgColor,1000)}
    
    function changebgColor(){
        document.body.style.backgroundColor=randomColor();
    }
    
    
}

const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
}


start.addEventListener('click',startChangingColor)
stop.addEventListener('click',stopChangingColor)

