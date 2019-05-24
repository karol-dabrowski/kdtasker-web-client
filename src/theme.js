import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0000B7'
        },
        background: {
            auth: '#fafafa',
            authWrapper: '#ffffff'
        }
    },
    props: {
        SidebarMenu: {
            width: 280
        }
    },
    typography: {
        useNextVariants: true,
    },
});

export default theme;