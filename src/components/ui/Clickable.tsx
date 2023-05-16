/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';

import { Chip, Link as RouterLink, Typography } from '@mui/material';

import { AuthRoute } from 'routers/auth/route';
import { ClickableConfig } from 'types/field';
import Backdrop from '../extended/Backdrop';

const actions = {
  OPEN_WEBVIEW: 'OPEN_WEBVIEW',
  RESEND_EMAIL_CODE: 'RESEND_EMAIL_CODE',
  SHOW_SIGN_UP_SCREEN: 'SHOW_SIGN_UP_SCREEN',
  SHOW_SIGN_IN_SCREEN: 'SHOW_SIGN_IN_SCREEN',
  SHOW_FORGOT_PASSWORD_SCREEN: 'SHOW_FORGOT_PASSWORD_SCREEN',
};

const getElement = ({ config, text }: { config: ClickableConfig; text: string }): JSX.Element => {
  switch (config.action) {
    case actions.OPEN_WEBVIEW:
      return (
        <RouterLink target="#" href={config.paramList.data} key={text}>
          {text}
        </RouterLink>
      );
    case actions.SHOW_SIGN_UP_SCREEN:
      return (
        <RouterLink to={AuthRoute.SIGN_UP} key={text} component={Link}>
          {text}
        </RouterLink>
      );

    case actions.SHOW_SIGN_IN_SCREEN:
      return (
        <RouterLink to={AuthRoute.SIGN_IN} key={text} component={Link}>
          {text}
        </RouterLink>
      );

    case actions.SHOW_FORGOT_PASSWORD_SCREEN:
      return (
        <RouterLink to={AuthRoute.FORGOT_PASSWORD} key={text} component={Link}>
          {text}
        </RouterLink>
      );
    default:
      return <RouterLink>{text}</RouterLink>;
  }
};

export const Clickable = ({ configs, label }: { label: string; configs: ClickableConfig[] }): JSX.Element => {
  let continueStart = 0;
  const result: (string | JSX.Element)[] = [];

  const handleSendEmail = (): void => {};

  configs.forEach((config) => {
    result.push(label.substring(continueStart, config.linkStart));
    const text = label.substring(config.linkStart, config.linkStart + config.linkLength);
    continueStart = config.linkStart + config.linkLength;

    if (config.action === actions.RESEND_EMAIL_CODE) {
      result.push(
        <>
          <Backdrop isShow={false} />
          <RouterLink>
            <Chip
              label={<Typography color="secondary.main">{text}</Typography>}
              sx={{
                backgroundColor: 'common.white',
                mx: 0,
                px: 0,
                '& .MuiChip-label': {
                  px: 0.5,
                },
              }}
              onClick={() => handleSendEmail()}
            />
          </RouterLink>
        </>
      );
      return;
    }

    result.push(getElement({ config, text }));
  });

  return <>{result}</>;
};
