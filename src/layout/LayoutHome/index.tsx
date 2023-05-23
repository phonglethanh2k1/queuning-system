import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Outlet } from 'react-router';
import Avatar from '@mui/material/Avatar';
import { Icon } from 'components/icons';
import { Button, Link } from '@mui/material';
import CardRight from 'layout/LayoutHome/CardRight';
import Menu from '../MainLayout/Menu';
import Calendar from './Calendar';

const drawerWidth = 250;

export default function LayoutHome() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'common.white',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          maxWidth: '25%',
          height: '100vh',
        }}
      >
        <Toolbar
          sx={{
            height: 80,
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ backgroundColor: 'warning.light', height: '32px' }}
            >
              <Icon name="notification" />
            </IconButton>
            <Box sx={{ display: 'flex', ml: 3 }}>
              <IconButton sx={{ p: 0 }} size="large">
                <Avatar alt="Remy Sharp" src="/images/cms/avatar.png" />
              </IconButton>
              <Box sx={{ ml: 1 }}>
                <Typography variant="body1">Xin chào</Typography>
                <Typography variant="h4" fontWeight="600">
                  Lê Quỳnh Ái Vân
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
        <Box px={2}>
          <Typography variant="h3" mt={6} mb={2}>
            Tổng quan
          </Typography>
          <CardRight />
          <Box mt={2} borderRadius="12px" boxShadow="2px 2px 15px rgba(70, 64, 67, 0.1)">
            <Calendar />
          </Box>
        </Box>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
              backgroundColor: 'common.white',
            },
          }}
          open
        >
          <Menu />

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link href="/" sx={{ backgroundColor: 'warning.light', borderRadius: '10px' }}>
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
          backgroundColor: 'rgba(0,0,0,0.04)',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '100vh',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
