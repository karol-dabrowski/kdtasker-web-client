import * as Yup from "yup";

import taskTitleValidator from "./fields/taskTitle";

export const TaskFormSchema = Yup.object().shape({
    title: taskTitleValidator
});
