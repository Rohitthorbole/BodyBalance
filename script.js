let calculate = document.getElementById('calculate');
let clear = document.getElementById('clear');
let display = document.getElementById('result');

calculate.addEventListener('click', () => {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if(weight<=0 || height<=0){
        alert('Invalid Data!')
    }
    else{
        if (weight && height) {
            let h = height / 100;
            let BMI = (weight / (h * h));
            display.innerHTML = BMI.toFixed(2)
        }
        else{
            alert('Fill the data correctly!!')
        }
    }

})

clear.addEventListener('click', () => {
    weight.value = '';
    height.value = '';
    location.reload();
})