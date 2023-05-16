/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { useTheme, SxProps, Theme } from '@mui/material/styles';
// import { Edit } from '@mui/icons-material';
import { Group, GroupOutline } from './Group';
import { Search } from './Search';
import { Close } from './Close';
import { Eye, EyeSlash } from './Eye';
import { Check, CheckFill } from './Check';
import { Warning, WarningFill, WarningCircle } from './Warning';
import { Calendar, CalendarFill, CalendarSecondary } from './Calendar';
import { Profile } from './Profile';
import { Settings } from './Settings';
import { Headphone } from './Headphone';
import { Mail } from './Mail';
import { Plus, PlusCircle } from './Plus';
import { Home } from './Home';
import { Setting } from './Setting';
import { Service } from './service';
import { Monitor } from './Monitor';
import { Bell } from './Bell';
import { Fifilter } from './Fifilter';
import { FillLeft } from './FillLeft';
import { FillRight } from './FillRight';
import { Edit } from './Edit';
import { Content } from './Content';
import { Clock } from './Clock';
import { LevelNo } from './LevelNo';
import { Report } from './Report';
import { LogOut } from './logOut';
import { Dashboard03 } from './Dashboard03';
import { Dashboard02 } from './Dashboard02';
import { Dashboard05 } from './Dashboard05';
import { Dashboard07 } from './Dashboard07';
import { Notification } from './Notification';

const icons = {
  notification: Notification,
  dashboard07: Dashboard07,
  dashboard05: Dashboard05,
  dashboard02: Dashboard02,
  dashboard03: Dashboard03,
  logOut: LogOut,
  report: Report,
  levelNo: LevelNo,
  clock: Clock,
  content: Content,
  edit: Edit,
  fillright: FillRight,
  fillleft: FillLeft,
  fifilter: Fifilter,
  bell: Bell,
  monitor: Monitor,
  service: Service,
  setting: Setting,
  home: Home,
  search: Search,
  'home-outline': Notification,
  group: Group,
  'group-outline': GroupOutline,
  message: Notification,
  'message-outline': Notification,
  close: Close,
  // clock: Notification,
  eye: Eye,
  'eye-slash': EyeSlash,
  check: Check,
  'check-fill': CheckFill,
  warning: Warning,
  'warning-fill': WarningFill,
  'warning-circle': WarningCircle,
  'info-fill': Notification,
  leave: Notification,
  calendar: Calendar,
  'calendar-secondary': CalendarSecondary,
  'calendar-fill': CalendarFill,
  heart: Notification,
  'heart-fill': Notification,
  comment: Notification,
  'comment-fill': Notification,
  profile: Profile,
  settings: Settings,
  'head-phone': Headphone,
  mail: Mail,
  plus: Plus,
  'plus-circle': PlusCircle,
};

type ColorTypes = 'action' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;

export type IconTypes = keyof typeof icons;

type Props = {
  name: IconTypes;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  size?: string | number;
  color?: ColorTypes;
  fill?: string;
  stroke?: string;
};

export const Icon = (props: Props): JSX.Element => {
  const theme = useTheme();
  const { name, ...others } = props;
  const Component: React.ElementType = icons[name];
  const colors = {
    action: theme.palette.action.active,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
  };

  return <Component {...others} style={{ ...props.sx, color: others.color && colors[others.color] }} />;
};
