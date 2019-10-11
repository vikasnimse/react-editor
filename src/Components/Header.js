import React, { Component, Fragment } from "react";
import {AppBar, IconButton, Typography, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            My React Editor/Viewer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}
export default Header;