import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Create = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <h2>ログイン状態: {props.loggedInStatus}</h2>
      <Grid container alignItems="center" justify="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <TextField
              label="性(漢字)"
              type="text"
              name="first_name"
              size="normal"
              margin="normal"
              inputRef={register({ required: true, maxLength: 20 })}
              error={Boolean(errors.title)}
              helperText={errors.title && "タイトルは20文字以内にして下さい。"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="性(漢字)"
              type="text"
              name="first_name"
              size="normal"
              margin="normal"
              inputRef={register({ required: true, maxLength: 20 })}
              error={Boolean(errors.title)}
              helperText={errors.title && "タイトルは20文字以内にして下さい。"}
            />
          </Grid>
          <input type="submit" />
        </form>
      </Grid>
    </>
  );
};
