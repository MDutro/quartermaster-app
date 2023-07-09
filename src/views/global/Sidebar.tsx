import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const drawerWidth: number = 220;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);;
  const [selected, setSelected] = useState("Home");

  type MenuItemProps = {
    viewName: string;
    linkTo: string;
    icon: ReactJSXElement;
  };

  const views = [
    {
      name: "Home",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Products Table",
      path: "/products-table",
      icon: <TableRowsOutlinedIcon />,
    },
     {
      name: "New Product",
      path: "/form",
      icon: <FeedOutlinedIcon />,
    },
  ];

  const setLinkSelectedBackgroundColor = (mode: string) => {
    if (mode === "light") {
      return colors.primary[900];
    } else {
      return colors.primary[200];
    }
  };

  const MenuItem = (props: MenuItemProps) => {
    return (
      <ListItem disablePadding>
        <Link
          to={props.linkTo}
          style={{
            textDecoration: "none",
            width: "100%",
            color:
              selected === props.viewName
                ? colors.primary[500]
                : colors.primary[100],
            background:
              selected === props.viewName
                ? setLinkSelectedBackgroundColor(theme.palette.mode)
                : colors.primary[400],
          }}
          onClick={() => setSelected(props.viewName)}
        >
          <ListItemButton>
            <ListItemIcon
              sx={{
                color:
                  selected === props.viewName
                    ? colors.primary[500]
                    : colors.primary[100],
              }}
            >
              {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.viewName} />
          </ListItemButton>
        </Link>
      </ListItem>
    );
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {views.map((view, index) => (
            <MenuItem
              viewName={view.name}
              linkTo={view.path}
              icon={view.icon}
              key={index}
            />
          ))}
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
