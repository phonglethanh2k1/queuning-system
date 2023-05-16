import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, CssBaseline, Typography, Button, useTheme } from '@mui/material';

import { Images } from 'constants/images';

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleClick = (): void => {};

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
      <CssBaseline />

      <Box sx={{ maxHeight: 'calc(100% - 64px)', overflowY: 'auto', width: '100%' }}>
        <Box
          sx={{
            position: 'relative',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up('xs')]: {
              maxWidth: 800,
              margin: '0 auto',
            },
            [theme.breakpoints.down('sm')]: {
              paddingTop: 0,
            },
          }}
        >
          <Box textAlign="center" p={5} sx={{ position: 'relative' }}>
            <Box
              component="img"
              sx={{
                position: 'absolute',
                zIndex: 0,
                top: 0,
                left: '50%',
                transform: 'translate(-15%, -40%)',
                marginBottom: theme.spacing(4),
                [theme.breakpoints.down('sm')]: {
                  display: 'none',
                  marginBottom: 0,
                },
              }}
              src={Images.RAIN}
              alt="RAIN"
              width="200px"
              height="200px"
            />

            <Box mb={4}>
              <Box
                component="img"
                sx={{ position: 'relative', zIndex: 1 }}
                src={Images.ERROR_404}
                alt="404"
                width="235px"
                height="103px"
              />
            </Box>

            <Typography sx={{ textTransform: 'uppercase' }} component="h1" variant="h2">
              {t('oops! nothing was found')}
            </Typography>

            <Box component="p" my={3}>
              <Typography variant="h3">
                {t('The page you are looking for might have been removed or it is temporarily unavailable')}
              </Typography>
            </Box>

            <Box mt={4}>
              <Button onClick={handleClick} variant="contained" color="primary">
                {t('Return to Home Page')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NotFound;
