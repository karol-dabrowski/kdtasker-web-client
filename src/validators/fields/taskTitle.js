import * as Yup from "yup";

export default Yup.string()
    .required("validation.task_title.is_required")
    .min(3, "validation.task_title.is_too_short")
    .max(255, "validation.task_title.is_too_long");
