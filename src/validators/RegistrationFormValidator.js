import * as Yup from 'yup';

export const RegistrationFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(80, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(120, 'Too Long!')
        .required('Required'),
});