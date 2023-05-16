import * as React from 'react';

import { Box, Skeleton, Stack, Typography } from '@mui/material';

import useMyProfile from 'services/user/userMyProfile';
import AvatarUser from 'components/ui/AvatarUser';

const UserProfile = (): JSX.Element => {
  const { data } = useMyProfile();
  const userInfo = data?.userInfo;

  if (!userInfo) {
    return (
      <Stack spacing={1}>
        <Box display="flex" width="100%" alignItems="center">
          <Box sx={{ width: 50, height: 50 }}>
            <Skeleton variant="circular" sx={{ width: 50, height: 50 }} />
          </Box>

          <Box ml={1} width="100%">
            <Skeleton variant="text" width="100%" height={30} />
            <Skeleton variant="text" width="100%" height={20} />
          </Box>
        </Box>
      </Stack>
    );
  }

  return (
    <Box display="flex" width="100%" alignItems="center">
      <AvatarUser avatar={data?.userInfo.avatar} />

      <Box ml={1}>
        <Typography variant="h4">{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
        <Typography variant="subtitle1">{userInfo.email}</Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
