import * as Yup from 'yup';

export default Yup.string()
    .email('validation.email.is_invalid')
    .required('validation.email.is_required');