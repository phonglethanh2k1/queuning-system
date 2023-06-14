import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Typography, Paper, Grid, Button, Link } from '@mui/material';

import Backdrop from 'components/extended/Backdrop';
import FieldsDynamic from 'components/form/FormDynamic';
import { GRID_SPACING } from 'constants/site-config';
import useSignIn from 'services/auth/signIn/useSignIn';
import { ResponseProps } from 'services/auth/signIn/useConfig';
import useSnackbar from 'components/extended/Snackbar/useSnackbar';
import useValidation from 'helpers/useValidation';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import { getDefaultValues } from 'components/form/FormDynamic/helper';
import { useNavigate } from 'react-router-dom';
import { DashboardRoute } from 'routers/dashboard/route';

interface SignInFormType {
  username: string;
  password: string;
}

const SignInForm: FC<{ data: ResponseProps }> = ({ data }) => {
  const { loading, mutate: signIn } = useSignIn();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { formInfo } = data.login;
  const validation = useValidation(formInfo.inputList);
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<SignInFormType>({
    resolver,
    defaultValues: getDefaultValues(formInfo.inputList),
  });

  const handleNextStep = (): void => {
    methods.reset();
    navigate(DashboardRoute.HOME);
  };

  const handleSubmit = async (values: SignInFormType): Promise<void> => {
    try {
      const response = await signIn({ step: '1', values });

      if (response.code === 406) {
        enqueueSnackbar(response.message, { variant: 'error' });
        return;
      }

      if (response.code === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('accessToken', response.accessToken.toString()); // Lưu access token vào local storage
        handleNextStep();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <Backdrop isShow={loading} />
      <Box p={4}>
        <Box textAlign="center" mb={GRID_SPACING}>
          <Box component="img" src="/images/cms/logo-alta.svg" />
          <Typography>{formInfo.description}</Typography>
        </Box>

        <FormProvider {...methods}>
          <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
            <Grid container spacing={GRID_SPACING} mb={2}>
              <FieldsDynamic data={formInfo.inputList} />
            </Grid>
            <Link href="/" sx={{ marginTop: '10px', color: 'error.main' }}>
              Quên mật khẩu ?
            </Link>
            <Box textAlign="center" my={GRID_SPACING}>
              <Box textAlign="center" my={GRID_SPACING}>
                <Button type="submit" variant="contained" size="medium">
                  Đăng nhập
                </Button>
              </Box>
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </>
  );
};

export default SignInForm;
