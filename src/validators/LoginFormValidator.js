import * as Yup from "yup";

import emailValidator from "./fields/email";
import passwordValidator from "./fields/password";

export const LoginFormSchema = Yup.object().shape({
    email: emailValidator,
    password: passwordValidator
});
