const validation = {
    email: {
        is_required: "Email is required",
        is_invalid: "Email is invalid"
    },
    password: {
        is_required: "Password is required",
        is_too_short: "Password is too short",
        is_too_long: "Password is too long"
    },
    first_name: {
        is_required: "First name is required",
        is_too_short: "First name is too short",
        is_too_long: "First name is too long"
    },
    last_name: {
        is_required: "Last name is required",
        is_too_short: "Last name is too short",
        is_too_long: "Last name is too long"
    },
    task_title: {
        is_required: "Title is required",
        is_too_short: "Title is too short",
        is_too_long: "Title is too long"
    }
};

export default validation;
