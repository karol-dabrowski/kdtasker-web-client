import * as Yup from 'yup';

import emailValidator from "./fields/email";
import passwordValidator from "./fields/password";
import firstNameValidator from "./fields/firstName";
import lastNameValidator from "./fields/lastName";

export const RegistrationFormSchema = Yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
    firstName: firstNameValidator,
    lastName: lastNameValidator
});