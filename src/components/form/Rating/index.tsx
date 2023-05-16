import { Rating as MaterialRating } from "@mui/material";
import React from "react";
import FormHelperText from "../FormHelperText";
import { Props } from "./types";
export * from "./types";

export const Rating = (props: Props) => {
  const { error, helperText, ...others } = props;
  return (
    <>
      <MaterialRating
        {...others}
        sx={{
          ...props.sx,
        }}
      />
      <FormHelperText error={error}>{helperText || ""}</FormHelperText>
    </>
  );
};

export default Rating;
