module.exports = function toReadable(number) {
    // Массивы с числами в виде строк
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];

    // проверка если число равно нулю
    if (number === 0) {
        return units[0];
    }

    let readableString = '';
    
    // Разделяем число на сотни, десятки и единицы
    const numHundreds = Math.floor(number / 100);
    const numTens = Math.floor((number % 100) / 10);
    const numUnits = number % 10;
    const numTeens = number % 100;

    // Обрабатываем сотни
    if (numHundreds > 0) {
        readableString += units[numHundreds] + ' ' + hundreds[0];
    }

    // Обрабатываем десятки и единицы
    if (numTeens > 10 && numTeens < 20) {
        if (numHundreds > 0) {
            readableString += ' ';
        }
        readableString += teens[numTeens - 11];
    } else {
        if (numTens > 0) {
            if (numHundreds > 0) {
                readableString += ' ';
            }
            readableString += tens[numTens - 1];
        }

        if (numUnits > 0) {
            if (numHundreds > 0 || numTens > 0) {
                readableString += ' ';
            }
            readableString += units[numUnits];
        }
    }
    // возврат полученной строки
    return readableString;
}
