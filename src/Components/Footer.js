import React , {Component, Fragment} from "react";
import {Box, Typography} from "@material-ui/core";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Box align="center" className="height-35">
                    Copyright © Your Website 2019.
                </Box>
            </Fragment>
        );
    }
}

export default Footer;