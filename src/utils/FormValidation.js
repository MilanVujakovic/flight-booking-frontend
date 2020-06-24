const validEmailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


export const validateForm = (validationRequirements, data) => {
    let errors = {};
    
    for( let [property, value] of Object.entries(data)) {
        errors = {
             ...errors,
              [property]: ''
        }

        const requirements = validationRequirements[property];
        if(!requirements) continue;

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
};

export const validateIsRequired = (value, property) => {
    return (
        !value 
            ? { isValid: false, error: `${capitalize(property)} cannot be empty.` } 
            : { isValid: true, error: '' }
    );
};

export const validateEmail = (value) => {   
    return (
        !validEmailRegex.test(value) 
            ? { isValid: false, error: 'Not a valid email adress.' }
            : { isValid: true, error: '' }
        );
};

export const validateMinLength = (value, property, minLength) => {
    return (
        value.length < minLength 
            ? { isValid: false, error: `${capitalize(property)} should contain at least ${minLength} characters.` }
            : { isValid: true, error: '' }    
    );
};

const noErrors = (errors) => {
    return !(Object.values(errors).filter(error => error.length > 0).length > 0)
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const validateLoginForm = userData => {
    const validationRequirements = {
        email: {
            isRequired: true,
            isEmailValid: true
        },
        password: {
            isRequired: true
        }
    }

    return validateForm(validationRequirements, userData);
}



export const validateSignupForm = (stepData, step) => {
    let validationRequirements = {};
    switch(step) {
        case 1:
            validationRequirements = {
                email: {
                    isRequired: true,
                    isEmailValid: true
                },
                password: {
                    isRequired: true,
                    minLength: 8
                }
            };
            return validateForm(validationRequirements, stepData);
        case 2:
            validationRequirements = {
                username: {
                    isRequired: true,
                },
                fullName: {
                    isRequired: true,
                },
                dobDay: {
                    isRequired: true
                },
                dobMonth: {
                    isRequired: true
                },
                dobYear: {
                    isRequired: true
                }
            };
            return validateForm(validationRequirements, stepData);
        case 3:
            validationRequirements = {
                streetAddress: {
                    isRequired: true,
                },
                city: {
                    isRequired: true,
                },
                postalCode: {
                    isRequired: true,
                },
                country: {
                    isRequired: true,
                },
                phoneNumber: {
                    isRequired: true,
                }
            };
            return validateForm(validationRequirements, stepData);
        default: console.log(`Invalid step: ${step}.`);
    }
}