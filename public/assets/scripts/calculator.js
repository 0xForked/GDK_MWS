let result;
let firstNumb;
let secondNumb;
let operatorType;

function operatorListener() {
    calculator();
}

function calculator() {
    if(this.name === 'input1') {
        firstNumb = this.value;
    } if(this.name === 'input2') {
        secondNumb = this.value;
    }

    var e = document.getElementById("operator");
    var operator = e.options[e.selectedIndex].value;
    operatorType = operator

    operation();
}

function operation() {
    // addition (+), subtraction(-), multiplication(*)
    // division(/), modulus(%)
    if(firstNumb && secondNumb && operatorType) {
        var result = 0;
        switch (operatorType) {
            case 'addition' :
                result = parseInt(firstNumb) + parseInt(secondNumb);
            break;
            case 'subtraction' :
                result = parseInt(firstNumb) - parseInt(secondNumb);
            break;
            case 'division' :
                result = parseInt(firstNumb) / parseInt(secondNumb);
            break;
            case 'multiplication' :
                result = parseInt(firstNumb) * parseInt(secondNumb);
            break;
            case 'modulus' :
                result = parseInt(firstNumb) % parseInt(secondNumb);
            break;
        }
        document.getElementById('result').innerHTML = result
    } else {
        document.getElementById('result').innerHTML = '...'
    }
}

const numbCalculate = document.getElementsByTagName('input')
for (let i = 0; i < numbCalculate.length; i++) {
    operatorType = '';
    numbCalculate[i].addEventListener('keyup', calculator, false);
}

function clear() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').innerHTML = '...';
    result = '';
    firstNumb = '';
    secondNumb = '';
    operatorType = '';
}

var onClear = document.getElementById("clear");
if (onClear.addEventListener) {
    onClear.addEventListener("click", clear, false);
} else if (onClear.attachEvent) {
    onClear.attachEvent('onclick', clear);
}
