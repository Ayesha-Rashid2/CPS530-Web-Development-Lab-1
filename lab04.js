function cleanString(input_string) {
    lower_string = input_string.toLowerCase();
    return_string = lower_string.replace(/[^a-z0-9]/g, "");
    return return_string;
}

function palindrome(input_string) {
    const clean_string = cleanString(input_string);
    reversed = clean_string.split('');
    reversed2 = reversed.reverse();
    reversed3 = reversed2.join('');

    if (reversed3 == clean_string) {
        return true;
    }
    else {
        return false;
    }
}

function results(input_string) {
    isPal = palindrome(input_string);

    if (isPal == true) {
        document.write("<b> The String: </b> \"" + input_string + "\" IS a palindrome! <br>");
    }
    else {
        document.write("<b> The String:  </b> \"" + input_string + "\" IS NOT a palindrome! <br>");
    }
}
