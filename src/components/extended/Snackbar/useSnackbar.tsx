/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { OptionsObject, SnackbarKey, SnackbarMessage, useSnackbar as useMessage } from 'notistack';
import SnackMessage from '.';

const useSnackbar = (): any => {
  const { enqueueSnackbar: showMessage } = useMessage();

  const enqueueSnackbar = (message: SnackbarMessage, options?: OptionsObject | undefined): SnackbarKey =>
    showMessage(message, {
      ...options,
      content: (key, value) => <SnackMessage id={key} message={value} variant={options?.variant || 'default'} />,
    });

  return { enqueueSnackbar };
};

export default useSnackbar;
