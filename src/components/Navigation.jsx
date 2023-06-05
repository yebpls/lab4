import React, { useContext } from "react"
import { Navbar, NavItem, Icon } from "react-materialize"
import { Link } from "react-router-dom"
import { ThemeContext } from "./ThemeContext"
function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Navbar
      className="menu accent-3"
      alignLinks="right"
      brand={
        <Link className="brand-logo" style={{ color: theme.color }} to="/">
          Films
        </Link>
      }
      style={{ backgroundColor: theme.backgroundColor }}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <NavItem style={{ color: theme.color }}>
              <Icon left>home</Icon>Home
            </NavItem>
          </Link>
        </li>

        <li>
          <Link to="about">
            <NavItem style={{ color: theme.color }}>
              <Icon left>info_outline</Icon>About
            </NavItem>
          </Link>
        </li>
        <li>
          <Link to="news">
            <NavItem style={{ color: theme.color }}>
              <Icon left>dvr</Icon>News
            </NavItem>
          </Link>
        </li>
        <li>
          <Link to="contact">
            <NavItem style={{ color: theme.color }}>
              <Icon left>contacts</Icon>Contacts
            </NavItem>
          </Link>
        </li>

        <li>
          <NavItem>
            <div style={{ position: "relative" }}>
              <a
                className="switch-mode"
                href="#"
                onClick={toggle}
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: "none",
                }}
                data-testid="toggle-theme-btn"
              >
                Switch Nav to {!dark ? "Dark" : "Light"} mode
              </a>
            </div>
          </NavItem>
        </li>
      </ul>
    </Navbar>
  )
}

export default Navigation
