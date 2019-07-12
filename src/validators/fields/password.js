import * as Yup from "yup";

export default Yup.string()
    .min(8, 'validation.password.is_too_short')
    .max(30, 'validation.password.is_too_long')
    .required('validation.password.is_required')