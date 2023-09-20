// Factory function to validate full name and name on the card
function validateName(inputId) {
    const inputElement = document.getElementById(inputId);
    const regex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    return {
        isValid: () => regex.test(inputElement.value),
        errorMessage: "Please enter a valid name with no symbols or numbers."
    };
}

// Factory function to validate city and state
function validateText(inputId, fieldName) {
    const inputElement = document.getElementById(inputId);
    const regex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    return {
        isValid: () => regex.test(inputElement.value),
        errorMessage: `Please enter a valid ${fieldName} with no numbers.`
    };
}

// Factory function to validate expiration month
function validateExpMonth(inputId) {
    const inputElement = document.getElementById(inputId);
    const validMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return {
        isValid: () => validMonths.includes(inputElement.value.trim()),
        errorMessage: "Please enter a valid month (e.g., January to December)."
    };
}

// Factory function to validate expiration year
function validateExpYear(inputId) {
    const inputElement = document.getElementById(inputId);
    const regex = /^\d{4}$/; // 4-digit year
    return {
        isValid: () => regex.test(inputElement.value),
        errorMessage: "Please enter a 4-digit year."
    };
}

// Factory function to validate CVV
function validateCVV(inputId) {
    const inputElement = document.getElementById(inputId);
    const regex = /^\d{3}$/; // 3-digit CVV
    return {
        isValid: () => regex.test(inputElement.value),
        errorMessage: "Please enter a 3-digit CVV."
    };
}

