const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calculateButton = document.getElementById("calculateButton")
var BMI,h,w;
var calculatedBMI = document.getElementById("calculatedBMI");
var ans;
calculateButton.addEventListener("click",()=>{
    h = height.value;
    w = weight.value;
    BMI = w/(h**2);
    ans = BMI.toFixed(2);
    console.log(ans);
    calculatedBMI.textContent = ans;

    

    
})


   