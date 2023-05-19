import { Box, Button, Grid, MenuItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import useYupValidationResolver from "helpers/useYupValidationResolver";
import TextField from "components/form/controller/TextField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import CheckboxGroupField from "components/form/controller/CheckboxGroupField";
import { Data, addServiceAsync, updateServiceAsync } from "redux/slices/serviceSlice";
import { ServiceRoute } from "routers/service/route";

const validation = yup.object({});

type Props = {
  service : any
}
const UpdateService = (props: Props): JSX.Element => {
  const {service} = props
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<any>({
    resolver,
    defaultValues: {
      id: service.id,
      serviceCode: service.serviceCode,
      descrip: service.descrip,
      serviceName: service.serviceName,
      increaseVerb: service.increaseVerb,
      to: service.to,
      prefix: service.prefix,
      surfix: service.surfix,
      checkbox: [service.checkbox]
    },
  });
  const {id} = service
  const handleSubmit = async (values?: Data ) => {
    console.log(values);
    dispatch<any>(updateServiceAsync({ id, values }));
    navigate(ServiceRoute.SERVICE);
  };
  const handleCancel = () => {
    methods.reset({
      id: '',
      serviceCode: "",
      descrip: "",
      serviceName: "",
      increaseVerb: "",
      to: "",
      prefix: "",
      surfix: "",
      checkbox: []
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Dịch vụ", to: '' },
          { label: "Danh sách dịch vụ", to: ServiceRoute.SERVICE },
          { label: "Chi tiết", to: `${ServiceRoute.SERVICE}/${service.id}`},
          { label: "Cập nhật", to: `${ServiceRoute.UPDATE_SERVICE.replace(":id", service.id)}` },
        ]}
      />
      <Box mt={1}>
        <Typography variant="h3" mb={2}>
          Quản lý dịch vụ
        </Typography>
        <Box
          sx={{
            backgroundColor: "common.white",
            width: "90%",
            px: 3,
            py: 4,
            borderRadius: "16px",
          }}
        >
          <Typography variant="h3" mb={2}>
            Thông tin dịch vụ
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={methods.handleSubmit(handleSubmit)}
            >
              <Grid container mb={3} spacing={3}>
                <Grid item xs={12} display="flex" gap={3}>
                  <Grid container flexDirection="row">
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          position: "relative",
                          ":after": {
                            position: "absolute",
                            content: '"*"',
                            color: "error.dark",
                            left: "95px",
                          },
                        }}
                      />
                      <TextField
                        name="serviceCode"
                        label="Mã dịch vụ:"
                        placeholder="Nhập mã dịch vụ"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          position: "relative",
                          ":after": {
                            position: "absolute",
                            content: '"*"',
                            color: "error.dark",
                            left: "100px",
                          },
                        }}
                      />
                      <TextField
                        name="serviceName"
                        label="Tên dịch vụ:"
                        placeholder="Nhập tên dịch vụ"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        position: "relative",
                        ":after": {
                          position: "absolute",
                          content: '"*"',
                          color: "error.dark",
                          left: "55px",
                        },
                      }}
                    />
                    <TextField
                      sx={{
                        ".MuiOutlinedInput-input": {
                          pb: 11,
                        },
                      }}
                      name="descrip"
                      label="Mô tả:"
                      placeholder="Mô tả thiết bị"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container mb={3} spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h3" mb={2}>
                    Quy tắc cấp số
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex">
                  <CheckboxGroupField
                    name="checkbox"
                    options={[
                      {
                        value: 1,
                        label: "Tăng tự động từ:",
                      },
                      {
                        value: 2,
                        label: "Prefix:",
                      },
                      {
                        value: 3,
                        label: "Surfix:",
                      },
                      {
                        value: 4,
                        label: "Reset mỗi ngày",
                      },
                    ]}
                    getItemLabel={(item) => item.label}
                    getItemValue={(item) => item.value}
                  />
                  <Box mt={1.2}>
                    <Box display="flex" alignItems="center">
                      <Box width="20%">
                        <TextField name="increaseVerb" />
                      </Box>
                      <Typography mx={1}>đến</Typography>
                      <Box width="20%">
                        <TextField name="to" />
                      </Box>
                    </Box>
                    <Box width="20%">
                      <TextField name="prefix" />
                    </Box>
                    <Box width="20%">
                      <TextField name="surfix" />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                fontStyle="italic"
                padding="10px"
                fontWeight="300"
                sx={{
                  position: "relative",
                  ":before": {
                    position: "absolute",
                    content: '"*"',
                    color: "error.dark",
                    left: "0",
                  },
                }}
              >
                là trường thông tin bắt buộc
              </Typography>
              <Box textAlign="center" mt={3}>
                <Button variant="outlined" size="large" onClick={handleCancel}>
                  Hủy bỏ
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    ml: 4,
                  }}
                  type="submit"
                >
                  Cập nhật
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
export default UpdateService;
