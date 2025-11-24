const clock=document.getElementById('clock')
// or documnet.querySelector('#clock)



//setInterval method
setInterval(function(){
    let date=new Date()
    console.log(date.toLocaleTimeString())
    clock.innerText=date.toLocaleTimeString()
    clock.style.color='red'
},1000) // 1000 milliseconds 
