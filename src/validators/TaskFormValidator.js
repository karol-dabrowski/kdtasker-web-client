import * as Yup from "yup";

export const TaskFormSchema = Yup.object().shape({
    title: Yup.string()
        .required("Required")
        .min(3, "Too Short")
        .max(255, "Too Long")
});
