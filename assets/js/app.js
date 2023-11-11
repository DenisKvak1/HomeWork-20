

function isSimply(number) {
    if (isNaN(number)) {
        return NaN;
    }
    if(number<=1){
        return false;
    }
    if(number==2){
        return true;
    }
    else if(number%2==0){
        return false;
    }
    for(let i=3; i<= Math.sqrt(number); i+=2){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
let Button = document.getElementById("calc");
let Input = document.getElementById("input");
let result = document.getElementById("result");


Button.addEventListener("click", function() {
    if(Input.value){
        if(isSimply(Input.value)){
            result.textContent='Число простое';
        }
        else if(isNaN(isSimply(Input.value))){
            result.textContent='Введите число';
        }
        else{
            result.textContent='Число не простое';
        }
        Input.value='';
    }
});
