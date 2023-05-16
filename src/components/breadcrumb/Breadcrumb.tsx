import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Link as MuiLink, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const CustomBreadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = item.to && location.pathname.startsWith(item.to);

          return item.to ? (
            <Link to={item.to} key={item.label} style={{ textDecoration: 'none' }}>
              <MuiLink color={isActive || isLast ? 'primary.main' : 'grey.800'}>{item.label}</MuiLink>
            </Link>
          ) : (
            <MuiLink key={item.label} color={isLast ? 'primary.main' : 'grey.800'}>
              {item.label}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};
export default CustomBreadcrumbs;
