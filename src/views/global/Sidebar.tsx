import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TocIcon from "@mui/icons-material/Toc";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const drawerWidth: number = 240;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

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
          <ListItem disablePadding sx={{}}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                width: "100%",
                color: colors.primary[100],
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/products-table"
              style={{
                textDecoration: "none",
                width: "100%",
                color: colors.primary[100],
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <TableRowsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Products Table" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
