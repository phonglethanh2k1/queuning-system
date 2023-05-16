import React from 'react';

import { Avatar } from '@mui/material';

const AvatarUser = ({ avatar }: { avatar?: string }): JSX.Element => (
  <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
);

export default AvatarUser;
