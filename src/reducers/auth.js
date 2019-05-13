const defaultState = {
    authorized: false,
    jwt: {
        token: null,
        refreshToken: null
    }
};

const auth = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default auth;