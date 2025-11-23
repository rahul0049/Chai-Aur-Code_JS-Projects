const form = document.querySelector("form")
// if we take height and weight then we get empty values . We only want values on click of the form submission

form.addEventListener('submit',function(e){
    e.preventDefault() // the default work of the form is to sent to server so we don't want to send the details to server
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#results")

    if(height<=0 || isNaN(height)){
        result.innerHTML="Please give a valid number"

    }

    else if(weight<=0 || isNaN(weight)){
        result.innerHTML="Please give a valid number"

    }
    
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML=`<span> ${bmi} </span>`
        const bmiType=document.createElement('div')
        if(bmi<18.6){ 
            bmiType.appendChild(document.createTextNode("Under Weight")) ;
            bmiType.style.color="#1E90FF"}

        else if(bmi>24.9) {bmiType.appendChild(document.createTextNode("Overweight"));
             bmiType.style.color="#E67E22"}
        else{ bmiType.appendChild(document.createTextNode("Normal"));
            bmiType.style.color="#2ECC71"}
        
        result.appendChild(bmiType);
       
    

});