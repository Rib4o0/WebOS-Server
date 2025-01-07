export function init(window) {
    window.classList.add("calculatorApp")
    window.classList.add("no-resize")
    window.parentElement.querySelector(".moveBar").querySelector(".windowName").textContent = "Calculator";

    const calculatorDisplay = document.createElement("div");
    const mainNum = document.createElement("div");
    const operatorElement = document.createElement("div")
    const secNum = document.createElement("div");
    const calculatorButtons = document.createElement("div");
    calculatorButtons.innerHTML = `<div class="allClear" data-allclear>AC</div>
            <div class="del" data-del>DEL</div>
            <div class="division" data-operator>÷</div>
            <div class="num" data-number>7</div>
            <div class="num" data-number>8</div>
            <div class="num" data-number>9</div>
            <div class="multiplication" data-operator>x</div>
            <div class="num" data-number>4</div>
            <div class="num" data-number>5</div>
            <div class="num" data-number>6</div>
            <div class="plus" data-operator>+</div>
            <div class="num" data-number>1</div>
            <div class="num" data-number>2</div>
            <div class="num" data-number>3</div>
            <div class="minus" data-operator>-</div>
            <div class="num" data-number>0</div>
            <div class="floatingPoint" data-number>.</div>
            <div class="equals" data-equals>=</div>`;

    // classes
    calculatorDisplay.classList.add("calculatorDisplay")
    calculatorButtons.classList.add("calculatorButtons")
    mainNum.classList.add("mainNum");
    operatorElement.classList.add("operator");
    secNum.classList.add("secNum");

    const numbers = calculatorButtons.querySelectorAll('[data-number]');
    const operators = calculatorButtons.querySelectorAll('[data-operator]');
    const allClear = calculatorButtons.querySelector('.allClear');
    const del = calculatorButtons.querySelector('.del');
    const equals = calculatorButtons.querySelector('.equals');

    const mainNumber = mainNum
    const secNumber = secNum
    const operatorSymbol = operatorElement

    var operator = null;
    var float = false;
    var prevNum = null;

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if (!(mainNumber.textContent.indexOf('.') > -1 && number.textContent == '.')) {
                if (mainNumber.textContent == '0' &&  number.textContent == '.') mainNumber.textContent = '0.'
                else if (mainNumber.textContent == '0') mainNumber.textContent = number.textContent;
                else mainNumber.textContent += number.textContent;
            }
        });
    })

    operators.forEach(operation => {
        operation.addEventListener('click', () => {
            if (operator == null || secNumber.textContent == '') {
                secNumber.textContent = mainNumber.textContent;
                mainNumber.textContent = 0;
            }
            operatorSymbol.textContent = operation.textContent;
            operator = operation.textContent;
        });
    })

    allClear.addEventListener('click', () => {
        mainNumber.textContent = 0;
        secNumber.textContent = '';
        operator = null;
        operatorSymbol.textContent = '';
    })

    del.addEventListener('click', () => {
        if (mainNumber.textContent.length > 1) {mainNumber.textContent = mainNumber.textContent.slice(0,-1);}
        else {mainNumber.textContent = 0;}
    })

    equals.addEventListener('click', () => {
        if (operator != null) {
            let firstNum = parseFloat(secNumber.textContent);
            let secondNum = parseFloat(mainNumber.textContent);
            if (secNumber.textContent != '') {
                prevNum = secondNum;
            } else {
                firstNum = secondNum;
                secondNum = prevNum;
            }
            let result
            switch (operator) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case 'x':
                    result = firstNum * secondNum;
                    break;
                case '÷':
                    result = firstNum / secondNum;
                    break;
            }
            secNumber.textContent = '';
            operatorSymbol.textContent = '';
            mainNumber.textContent = result;
        }
    });

    calculatorDisplay.append(secNumber);
    calculatorDisplay.append(operatorSymbol);
    calculatorDisplay.append(mainNumber);
    window.append(calculatorDisplay)
    window.append(calculatorButtons)
}