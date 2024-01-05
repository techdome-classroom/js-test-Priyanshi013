/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (openingBrackets.includes(currentChar)) {
            stack.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            const lastOpeningBracket = stack.pop();

            if (!lastOpeningBracket || openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentChar)) {
                return false; 
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };


