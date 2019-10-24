import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container,  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import Header from "../Header";
import Footer from "../Footer";

const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    Content: {
        paddingTop: 5,
        minHeight: "calc(100vh - 80px)",
        flex: 1
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        console.log("props: "+this.props)
        return (
            <Fragment>
                <Header />
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <Container component="main" maxWidth="xs" className={classes.Content}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <HomeIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Home
                        </Typography>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}
export default withStyles(useStyles)(Home);