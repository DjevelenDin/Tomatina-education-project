import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./sidebar.css";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { t, i18n } = useTranslation();

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <div className="nav_sidebar">
          <Link className="btn_nav_sidebar" to="/about">
            <li>{t("sidebar.aboutTomatina")}</li>
          </Link>
          <Link className="btn_nav_sidebar" to="/delivery">
            <li>{t("sidebar.aboutDelivery")}</li>
          </Link>
          <Link className="btn_nav_sidebar" to="/vacancies">
            <li>{t("sidebar.aboutVacations")}</li>
          </Link>
          <Link className="btn_nav_sidebar" to="/oferta">
            <li>{t("sidebar.aboutDocum")}</li>
          </Link>
          <Link className="btn_nav_sidebar" to="/contacts">
            <li>{t("sidebar.aboutContacts")}</li>
          </Link>
        </div>
      </List>
    </div>
  );

  const anchor = "right";

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <svg
            className="bg"
            width="47"
            height="45"
            viewBox="0 0 47 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
              stroke="#518B26"
            ></path>{" "}
          </svg>
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
