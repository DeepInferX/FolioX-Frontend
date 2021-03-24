import React, { useEffect, useContext } from "react";
import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Typography,
  makeStyles,
  ListItem,
  Collapse,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useSelector } from "react-redux";

const items = [
  {
    href: "../home",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "../student-group",
    icon: UsersIcon,
    title: "Student Groups",
  },

  {
    href: "../account",
    icon: UserIcon,
    title: "Account",
  },
  {
    href: "../settings",
    icon: SettingsIcon,
    title: "Settings",
  },
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 300,
    height: "100% ",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  studentGroup: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    marginRight: "auto",
    fontSize: "0.87rem",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const NavBar = () => {
  // For handling student group nested list
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const groups = useSelector((store) => store.group.groups);
  groups?.sort((a, b)=> parseInt(a.id, 10) - parseInt(b.id, 10))
  const adminName = useSelector((store) => store.auth.user.user.name);
  const adminEmail = useSelector((store) => store.auth.user.user.email);
  const planExpireDate = useSelector(
    (store) => store.auth.user.user.plan_expire_date
  );
  const classes = useStyles();
  const content = (
    <Box height="100%" display="flex" flexDirection="column" >
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          // src={user.avatar}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {adminName}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {adminEmail}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Plan Expires On - <b>{planExpireDate} </b>
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item, idx) => {
            if (item.title === "Student Groups") {
              return (
                <List
                  key={"Student Groups"}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}
                >
                  <ListItem
                    button
                    onClick={handleClick}
                    className={classes.studentGroup}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PeopleAltIcon size={10} className={classes.icon} />
                      <span primary="Student Groups" className={classes.title}>
                        Student Group
                      </span>
                    </div>

                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    style={{ paddingLeft: 30 }}
                    in={open}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <NavItem
                        href={"add"}
                        title={<span>&#xFF0B; &nbsp; New</span>}
                      />
                      {groups &&
                        groups.map((group, idx) => (
                          <NavItem
                            key={idx}
                            href={`id=${group.id}`}
                            title={group.group_name}
                          />
                        ))}
                    </List>
                  </Collapse>
                </List>
              );
            } else {
              return (
                <NavItem
                  href={item.href}
                  key={idx}
                  title={item.title}
                  icon={item.icon}
                />
              );
            }
          })}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
