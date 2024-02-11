# Regex-Task

# Overview
This code is a simple script that validates a credit card number entered by the user. The script uses regular expressions (regex) to match the card number against the pattern of a Mastercard or Visa card.

# Function: validateCard(cardNumber)
This function is used to validate the credit card number. It uses two regex patterns, mastercardMatch and visaMatch, to check if the card number is a valid Mastercard or Visa number.

1. The mastercardMatch regex pattern is used to match Mastercard card numbers. It starts with the number 5, followed by one digit in the range 1-5, and then 14 more digits, for a total of 16 digits.
```
const mastercardMatch = /^(?:5[1-5]\d{14})|(?:(?:222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)\d{12})$/;
```
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
- $ - This symbol ensures that the pattern must end at the end of the string.

2. The visaMatch regex pattern is used to match Visa card numbers. It starts with the number 4, and can have from 12 to 15 digits, for a total of 13 to 16 digits.
```
const visaMatch = /^4(?:\d{12,15})$/;
```
- ^ - This symbol ensures that the pattern must start at the beginning of the string.
- 4 - This pattern matches the number 4. This is the first digit of a Visa card number.
- (?:) - This is a non-capturing group.
- \d{12,15} - This pattern matches between 12 to 15 digits. It is used to match the remaining digits of a Visa card number.
- $ - This symbol ensures that the pattern must end at the end of the string.

If the card number matches either of these patterns, the function returns "Master" or "Visa" respectively. If the card number does not match either pattern, the function returns "invalid".

# Function: hideCard(cardNumber)
This function is used to hide all but the last four digits of the credit card number. It converts the card number to a string and then uses the replace() method and a regex pattern to replace all but the last four digits with "X" characters.

- The regex pattern used in the replace() method is "/\S+(\S{4})$/". This pattern matches one or more non-whitespace characters (\S+) followed by four non-whitespace characters (\S{4}) at the end of the string ($). The matched characters are then replaced with the "X" characters using the repeat() method.

# Function: manageValidation()
This function is used to manage the validation process. It prompts the user for their name and credit card number and then uses the validateCard(cardNumber) function to validate the card number. If the card number is valid, it will display the type of card it is, otherwise it will display that the card is invalid.

# Usage
In order to use the script, simply run the manageValidation() function. The script will prompt the user for their name and credit card number, and will then display the type of card and whether the card number is valid or invalid.

# Expected Output
If the script.js is run as it is on this repository, the results look like this:
```
--> Animal Kingdom> node .\AnimalKingdom.js

Please input your name: Adaobi

Welcome ADAOBI

Input your Credit Card Number: 4346578956643480

Your card is a Visa Card and your card number XXXXXXXXXXXX3480 is valid

```

# Conclusion
This script provides a simple way to validate and hide credit card numbers using regular expressions. It can be used as a starting point for more complex credit card validation and hiding functionality. Understanding of regex is important in this script.
