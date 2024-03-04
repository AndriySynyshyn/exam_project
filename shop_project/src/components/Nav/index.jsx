import React from 'react'
import classes from './index.module.css'
import logo from "../../pictures/logo.png"
import cardIcon from "../../pictures/icons-shopping_bag.png"
import {NavLink} from "react-router-dom"

export default function index() {
    const check_class = ({isActive}) => isActive ? classes.active : "";

  return (
      <header>
          <nav className={classes.headerContainer}>
              <div className={classes.leftside}>
                  <img src={logo} alt="logo" />
                  <button className={classes.btnCatalog}><NavLink to={"/categories"}>Catalog</NavLink></button>
              </div>
              <div className={classes.rightside}>
                  <div className={classes.navigation}>
                      <NavLink to='/' className={check_class}>Home Page</NavLink>
                      <NavLink to='/products' className={check_class}>All Products</NavLink>
                      <NavLink to='/sales' className={check_class}>All Sales</NavLink>
                  </div>
                  <NavLink to={'/cart'} className={classes.iconbag}><img src={cardIcon} alt="bag" /></NavLink>
              </div>
          </nav>
      </header>
  );
}
