import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0000B7'
        },
        background: {
            auth: '#bdbdbd'
        }
    },
    props: {
        SidebarMenu: {
            width: 280
        }
    }
});

export default theme;