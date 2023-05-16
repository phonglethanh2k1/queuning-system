/* eslint-disable @typescript-eslint/no-explicit-any */
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Collapse from '@mui/material/Collapse';
import { DashboardRoute } from 'routers/dashboard/route';
import { SettingRoute } from 'routers/setting/route';
import { Icon } from 'components/icons';
import colors from 'themes/colors';
import { DeviceRoute } from 'routers/device/route';
import { ServiceRoute } from 'routers/service/route';
import { LevelNoRoute } from 'routers/levelNo/route';
import { ReportRoute } from 'routers/report/route';

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const MenuMain = [
    {
      label: 'Dashboard',
      icon: <Icon name="home" stroke={pathname === DashboardRoute.HOME ? colors.primaryContractText : ''} />,
      link: DashboardRoute.HOME,
    },
    {
      label: 'Thiết bị',
      icon: <Icon name="monitor" stroke={pathname === DeviceRoute.DEVICE ? colors.primaryContractText : ''} />,
      link: DeviceRoute.DEVICE,
    },
    {
      label: 'Dịch vụ',
      icon: <Icon name="service" stroke={pathname === ServiceRoute.SERVICE ? colors.primaryContractText : ''} />,
      link: ServiceRoute.SERVICE,
    },
    {
      label: 'Cấp số',
      icon: <Icon name="levelNo" stroke={pathname === LevelNoRoute.LEVEL_NO ? colors.primaryContractText : ''} />,
      link: LevelNoRoute.LEVEL_NO,
    },
    {
      label: 'Báo cáo',
      icon: <Icon name="report" fill={pathname === ReportRoute.REPORT ? colors.primaryContractText : ''} />,
      link: ReportRoute.REPORT,
    },
    {
      label: 'Cài đặt hệ thống',
      icon: <Icon name="setting" stroke={pathname === SettingRoute.SETTING ? colors.primaryContractText : ''} />,
      link: SettingRoute.SETTING,
      Item: [
        {
          label: 'Gói dịch vụ',
          icon: '',
          link: '',
        },
      ],
    },
  ];

  const handleNavigate = (link: string) => {
    navigate(link);
  };
  return (
    <div>
      <Toolbar sx={{ height: 150 }}>
        <Box
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            width: 1,
            justifyContent: { xs: 'center', md: 'center' },
          }}
        >
          <img src="/images/cms/logo-alta.png" alt="" width="80px" height="64px" />
        </Box>
      </Toolbar>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'common.white' }} component="nav">
        {MenuMain.map((item) => (
          <Box key={item.link}>
            <ListItemButton
              onClick={() => handleNavigate(item.link)}
              sx={{
                bgcolor: pathname === item.link ? 'primary.main' : 'background.default',
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  '.MuiListItemText-primary': {
                    color: pathname === item.link ? colors.primaryContractText : colors.grey700,
                  },
                }}
                primary={item.label}
              />
            </ListItemButton>
            <Collapse in timeout="auto" unmountOnExit style={{ marginLeft: '46px' }}>
              <List component="div" disablePadding>
                {item.Item?.map((menuChild) => (
                  <ListItemButton sx={{ pl: 4, borderRadius: '10px' }} key={menuChild.link}>
                    <ListItemText primary={menuChild.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </div>
  );
};
export default Menu;
