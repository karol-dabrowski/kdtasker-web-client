export const CLEAR_FORM_STATE = 'CLEAR_FORM_STATE';
const clearFormState = () => {
    return {
        type: CLEAR_FORM_STATE
    }
};

export const clearPreviousFormState = () => {
    return dispatch => {
        dispatch(clearFormState());
    };
};