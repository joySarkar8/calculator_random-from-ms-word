const result = document.getElementById('result');
const ul = document.getElementById('ul');
document.getElementById('btn').addEventListener('click', function () {
    const valueFromInput = document.getElementById('input');
    const finalValue = valueFromInput.value;
    const banglaToEnglish = replaceNumbers(finalValue);
    const split = banglaToEnglish.split('');
    
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
        for(const string of newSplit){
            const number = parseInt(string);
            if (!isNaN(number)) {
                newArray.push(number);
            };
        };
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
});


