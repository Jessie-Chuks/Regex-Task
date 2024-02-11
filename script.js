const prompt = require("prompt-sync")({sigint: true});

function validateCard(cardNumber) {
    const mastercardMatch = /^(?:5[1-5]\d{14})|(?:(?:222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)\d{12})$/;
    const visaMatch = /^4(?:\d{12,15})$/;

    if (mastercardMatch.test(cardNumber)) {
        return "Master";
    } else if (visaMatch.test(cardNumber)) {
        return "Visa";
    } else {
        return "invalid";
    }
}

function hideCard(cardNumber) {
    const lengthOfX = cardNumber.toString().length-4;
    return cardNumber.toString().replace(/\S+(\S{4})$/, "X".repeat(lengthOfX) +"$1");
}

function manageValidation() {
    console.log();
    const name = prompt("Please input your name: ");
    console.log(`\nWelcome ${name.toUpperCase()}\n`);
    const cardNumber = prompt("Input your Credit Card Number: ");
    if(validateCard(cardNumber) === "invalid") {
        console.log(`\nYour Credit Card Number ${hideCard(cardNumber)} is invalid\n`)
    } else {
        console.log(`\nYour card is a ${validateCard(cardNumber)} Card and your card number ${hideCard(cardNumber)} is valid\n`)
    }
}

manageValidation();

/*    MASTER CARD REGEX EXPLANATION
    - ^ - This symbol ensures that the pattern must start at the beginning of the string.
    - (?:) - This is a non-capturing group. It groups the pattern inside the parentheses and makes the code more readable.
    - 5[1-5] - This pattern matches the number 5, followed by a digit in the range 1-5. This is the first digit of a Mastercard card number.
    - \d{14} - This pattern matches 14 digits. It is used to match the remaining digits of a Mastercard card number.
    - | - This symbol is an "or" operator. It allows the regex funtion to match either the pattern before or after the operator.
    - (?:) - This is another non-capturing group.
    - 222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720 - This pattern matches the first 6 digits of a Mastercard card number within the range 2221-2720.
        222[1-9] was used to capture numbers between 2221-2229
        22[3-9]\d was used to capture numbers between 2230-2299
        2[3-6]\d{2} was used to capture numbers between 2300-2699
        27[0-1]\d was used to capture numbers between 2700-2719
        Finally 2720 which brings them all to a range of 2221-2720 to capture the first 4 digits of the second non-capturing group.
    - \d{12} - This pattern matches 12 digits. It is used to match the remaining digits of a Mastercard card number.
    - $ - This symbol ensures that the pattern must end at the end of the string.*/

/*    VISA CARD REGEX EXPLANATION
    - ^ - This symbol ensures that the pattern must start at the beginning of the string.
    - 4 - This pattern matches the number 4. This is the first digit of a Visa card number.
    - (?:) - This is a non-capturing group.
    - \d{12,15} - This pattern matches between 12 to 15 digits. It is used to match the remaining digits of a Visa card number.
    - $ - This symbol ensures that the pattern must end at the end of the string.*/