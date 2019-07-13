const notification = {
    registration_success: "Now you can log in",
    user_id: {
        is_required: "An internal error occurred. Please try again",
        must_be_correct_uuid: "An internal error occurred. Please try again"
    },
    email: {
        is_required: "Email is required",
        must_be_correct_email: "Incorrect email",
        this_email_is_already_used: "Email is not unique"
    },
    first_name: {
        is_required: "First name is required",
        must_be_a_string: "Incorrect format",
        must_be_between_3_and_80_characters: "First name must be between 3 and 80 characters",
        can_contain_only_letters: "First name can contain only letters"
    },
    last_name: {
        is_required: "Last name is required",
        must_be_a_string: "Incorrect format",
        must_be_between_3_and_120_characters: "Last name must be between 3 and 120 characters",
        can_contain_only_letters_and_dash: "Last name can contain only letters and dash"
    },
    password: {
        is_required: "Password is required",
        must_be_a_string: "Incorrect format",
        must_be_between_8_and_30_characters: "Password must be between 8 and 30 characters",
        must_contain_at_least_one_letter_and_number: "Password must contain at least one letter and number"
    },
    unknown_error: "An internal error occurred. Please try again",
    login_or_password_is_incorrect: "Login or password is incorrect"
};

export default notification;
