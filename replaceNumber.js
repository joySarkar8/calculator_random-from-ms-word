const numbers = {
    '০': 0,
    '১': 1,
    '২': 2,
    '৩': 3,
    '৪': 4,
    '৫': 5,
    '৬': 6,
    '৭': 7,
    '৮': 8,
    '৯': 9
  };

function replaceNumbers(input) {
    const output = [];

   
    for (let i = 0; i < input.length; ++i) {
      if (numbers.hasOwnProperty(input[i])) {
        output.push(numbers[input[i]]);
      } else {
        output.push(input[i]);
      }
    }
    return output.join('');
  };

