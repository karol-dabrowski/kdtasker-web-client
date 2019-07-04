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
    overrides: {
        MuiTableRow: {
            root: {
                "&:last-child td": {
                    borderBottom: 0
                }
            }
        },
        MuiCardContent: {
            root: {
                "&:last-child": {
                    paddingBottom: '16px'
                }
            }
        }
    }
});

export default theme;