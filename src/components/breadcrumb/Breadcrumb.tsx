import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Link as MuiLink, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
  to: string | null;
  label: string;
  isActive?: boolean; // Thêm thuộc tính isActive cho mỗi mục breadcrumb
}

interface CustomBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = items.findIndex(item => item.to && currentPath === item.to);
    setActiveIndex(activeItemIndex);
  }, [location.pathname, items]);
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = index === activeIndex;

          return item.to ? (
            <Link
              to={item.to}
              key={item.label}
              style={{ textDecoration: 'none' }}
              onClick={() => handleItemClick(index)}
            >
              <MuiLink color={isActive ? 'primary.main' : 'grey.800'}>
                {item.label}
              </MuiLink>
            </Link>
          ) : (
            <MuiLink
              key={item.label}
              color={isActive ? 'primary.main' : 'grey.800'}
              onClick={() => handleItemClick(index)}
            >
              {item.label}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadcrumbs;