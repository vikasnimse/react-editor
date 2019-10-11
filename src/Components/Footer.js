import React , {Component, Fragment} from "react";
import {AppBar, IconButton, Typography, Toolbar} from "@material-ui/core";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="h6">
                            Copyright © Your Website 2019.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

export default Footer;