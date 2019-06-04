import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
});