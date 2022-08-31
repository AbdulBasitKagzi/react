import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                Quote
              </NavLink>
            </li>
            <li>
              <NavLink to="/addquotes" activeClassName={classes.active}>
                Add Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
