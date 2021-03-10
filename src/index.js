module.exports = function toReadable (number) {
    return convert(number);
}

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function convert(number) {
    if (number === 0) {
        return 'zero';
    } else {
        return convert_huns(number);
    }
};

function convert_huns(number) {
    if (number <= 99) {
        return convert_tens(number);
    } else {
        if (number % 100 !== 0) {
            return ones[Math.floor(number / 100)] + ' hundred ' + convert_tens(number % 100);
        } else {
            return ones[Math.floor(number / 100)] + ' hundred';
        }
    }
};

function convert_tens(number) {
    if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else if (number < 10) {
        return ones[number];
    } else {
        if (number % 10 !== 0) {
            return tens[Math.floor(number / 10)] + ' ' + ones[Math.floor(number % 10)];
        } else {
            return tens[Math.floor(number / 10)];
        }
    }
}
