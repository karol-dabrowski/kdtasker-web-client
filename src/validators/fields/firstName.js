import * as Yup from "yup";

export default Yup.string()
    .min(3, "validation.first_name.is_too_short")
    .max(80, "validation.first_name.is_too_long")
    .required("validation.first_name.is_required");
