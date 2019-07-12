import * as Yup from "yup";

export default Yup.string()
    .min(3, 'validation.last_name.is_too_short')
    .max(120, 'validation.last_name.is_too_long')
    .required('validation.last_name.is_required');