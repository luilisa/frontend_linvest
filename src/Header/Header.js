import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Portfelies",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

export default function Header() {
  const { header } = useStyles();
  const displayDesktop = () => {
    return <Toolbar>{luizaInvestLogo}{getMenuButtons()}</Toolbar>;
  };
 
  const luizaInvestLogo = (
    <Typography variant="h5" component="h1">
      LuizaInvest
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
