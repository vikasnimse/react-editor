import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header"
import Footer from "./Footer"
import "../css/app.css"

const styles = theme =>({
  Content: {
    paddingTop: 5,
    minHeight: "calc(100vh - 150px)",
    flex: 1
  }
});

export default withStyles(styles)(class extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Fragment>
          <Header />
          <div id="content" className = {classes.Content}>
              My Content
          </div>
          <Footer />
      </Fragment>
    );
  }
});

