import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Outlet } from "react-router";
import Avatar from "@mui/material/Avatar";
import { Icon } from "components/icons";
import { Button, Link } from "@mui/material";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Menu from "./Menu";

const drawerWidth = 250;

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          bgcolor: "common.white",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: 1,
        }}
      >
        <Toolbar
          sx={{
            height: 80,
            backgroundColor: "rgba(0,0,0,0.04)",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" />
          <Box sx={{ flexGrow: "1" }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ backgroundColor: "warning.light", height: "32px", mr: 3 }}
            >
              <Icon name="notification" />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/images/cms/avatar.png" />
            </IconButton>
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1">Xin chào</Typography>
              <Typography variant="h4" fontWeight="600">
                Lê Quỳnh Ái Vân
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: 0,
              backgroundColor: "common.white ",
            },
          }}
          open
        >
          <Menu />

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href="/"
              sx={{ backgroundColor: "warning.light", borderRadius: "10px" }}
            >
              <Button startIcon={<Icon name="logOut" />}>Đăng xuất</Button>
            </Link>
          </Box>
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "rgba(0,0,0,0.04)",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
