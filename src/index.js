module.exports = function toReadable (number) {
    let result = '';
    let tens = '';

    if(number == 0) return 'zero';

    const hundredsCount = Number(String(number / 100).split('.')[0]);
    number -= hundredsCount * 100;
    const teens = number > 9 && number < 20 ? number : false;
    const tensCount = Number(String(number / 10).split('.')[0]);
    const onesCount = number - tensCount * 10;

    result += hundredsCount ? `${digitToStringZeroToNine(hundredsCount)} hundred` : '';

    if (teens){
        result += ` ${digitToStringTeen(teens)}`;
    } else {
        if(tensCount){
            result += ` ${digitToStringTens(tensCount)}`;
        }
        if(onesCount){
            result += ` ${digitToStringZeroToNine(onesCount)}`;
        }
    }
    return result.trim();
};

function digitToStringZeroToNine(digit){
    switch (digit){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return false;
    }
}

function digitToStringTeen(digit){
    switch (digit){
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return false;
    }
}

function digitToStringTens(digit){
    switch (digit){
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return false;
    }
}
