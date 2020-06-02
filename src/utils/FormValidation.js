const validEmailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


/**
 * @param {*} event 
 * 
 * @returns error message or null if there is no error
 */
export const validateEmail = (name, value) => {   
    console.log(validEmailRegex.test(value));
    return value === '' ? `${name} cannot be empty.` : (!validEmailRegex.test(value) ? 'Not a valid email adress.' : '');
}

/**
 * @param {*} event 
 * 
 * @returns error message or null if there is no error
 */
export const validatePassword = (name, value) => {
    return value === '' ? `${name} cannot be empty.` : '';
}