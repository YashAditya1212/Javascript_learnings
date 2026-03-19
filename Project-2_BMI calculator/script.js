const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    e.preventDefault()

    if(height ==="" ||height <0 |isNaN(height)){
        results.innerHTML = `Please provide a valid height ${height}`
    }
    else if(weight ===""|| weight <0 || isNaN(weight)){
        results.innerHTML = `PLease provide a valid weight ${weight}`
    }
    else {
    const BMI= (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `Your BMI is ${BMI}`
    
    if(BMI <18.6){
        document.body.style.backgroundColor="aqua"
        results.innerHTML= `You are underweight ${BMI}`
    }
    else if(BMI >24.8){
        document.body.style.backgroundColor="mint"
        results.innerHTML = `You are overweight ${BMI}`
    }
    else if(BMI >18.6 && BMI< 24.8){
        document.body.style.backgroundColor="olive"
        results.innerHTML = `YOu have normal BMI ${BMI}`
    }
}
})