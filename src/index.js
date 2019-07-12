import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { SnackbarProvider } from "notistack";
import { I18nextProvider } from "react-i18next";

import App from "./components/App";
import rootReducer from "./reducers";
import theme from "./theme";
import i18n from "./lang/i18n";

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={theme}>
                <SnackbarProvider>
                    <I18nextProvider i18n={i18n}>
                        <App />
                    </I18nextProvider>
                </SnackbarProvider>
            </MuiThemeProvider>
        </MuiPickersUtilsProvider>
    </Provider>,
    document.getElementById("root")
);
