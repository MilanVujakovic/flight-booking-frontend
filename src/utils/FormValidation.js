const validEmailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


export const validateForm = (validationRequirements, data) => {
    let errors = {};
    
    for( let [property, value] of Object.entries(data)) {
        errors = {
             ...errors,
              [property]: ''
        }

        const requirements = validationRequirements[property];

        if(requirements.isRequired) {
            const { isValid, error } = validateIsRequired(value, property);
            if(!isValid) {
                errors[property] = error;
                continue;
            }
        } 
        if(requirements.minLength) {
            const { isValid, error } = validateMinLength(value, property, requirements.minLength);
            if(!isValid) {
                errors[property] = error;
                continue;
            }
        }
        if(requirements.isEmailValid) {
            const { isValid, error } = validateEmail(value);
            if(!isValid) {
                errors[property] = error;
                continue;
            }
        }
    };

    return {
        isValid: noErrors(errors),
        errors: errors
    };
}

export const validateIsRequired = (value, property) => {
    return (
        !value ? 
            { isValid: false, error: `${capitalize(property)} cannot be empty.` } :
            { isValid: true, error: '' }
    );
}

export const validateEmail = (value) => {   
    return (
        !validEmailRegex.test(value) ? 
            { isValid: false, error: 'Not a valid email adress.' } : 
            { isValid: true, error: '' }
        );
}

export const validateMinLength = (value, property, minLength) => {
    return (
        value <= minLength ?
            { isValid: false, error: `${capitalize(property)} should contain at least ${minLength} characters.` } :
            { isValid: true, error: '' }    
    );
}

const noErrors = (errors) => {
    console.log(Object.values(errors));
    console.log(Object.values(errors).filter(error => error.length > 0));
    return !(Object.values(errors).filter(error => error.length > 0).length > 0)
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);