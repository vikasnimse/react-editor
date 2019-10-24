import React, { Component, Fragment } from "react";
import {AppBar, IconButton, Typography, Toolbar} from "@material-ui/core";
import ExplicitIcon from '@material-ui/icons/Explicit';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static" className="height-35">
                    <Toolbar className="height-35">
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                            <ExplicitIcon />
                        </IconButton>
                        <Typography variant="h6">
                            My React Editor Viewer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}
export default Header;