import React from "react";
import { Component } from "react"
import classes from "./User.module.css";

// functional based component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// creating a class based component
class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
