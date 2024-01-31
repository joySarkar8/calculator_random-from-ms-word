const result = document.getElementById('result');
const ul = document.getElementById('ul');
const calculate = document.getElementById('calculate');
const newEquation = document.getElementById('new-calculate');
const valueFromInput = document.getElementById('input');


function joy(value) {
    if (value === true) {
        calculate.disabled = false;
        calculate.style.backgroundColor = '#015196';
    }
}
calculate.addEventListener('click', function () {

    const finalValue = valueFromInput.value;
    const banglaToEnglish = replaceNumbers(finalValue);
    const split = banglaToEnglish.split('');

    if (finalValue === '') {
        return;
    }

    const newArray = [];
    let string = '';
    let sum = 0;
    if (split.includes('\t')) {
        split.push('\t');
        for (const i of split) {
            if ('\t' !== i) {
                if (i !== ' ') {
                    string = string + i;
                };
            };
            if ('\t' === i || i === ' ') {
                if (string !== '') {
                    const number = parseInt(string);
                    if (!isNaN(number)) {
                        newArray.push(number);
                    };
                };
                string = '';
            };
        };
        console.log(newArray);
    } else {
        const newSplit = banglaToEnglish.split(' ');
        console.log(newSplit);
        for (const string of newSplit) {
            const number = parseInt(string);
            if (!isNaN(number)) {
                newArray.push(number);
            };
        };
    };

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    };


    for (const i of newArray) {
        const li = document.createElement('li');
        li.classList.add('li')
        li.innerText = i;
        ul.appendChild(li);
        console.log(i);
        sum += i;
    };
    
    console.log(sum);
    result.innerText = sum;
    valueFromInput.value = '';
    calculate.disabled = true;
    calculate.style.backgroundColor = '#A2A9AF';
});