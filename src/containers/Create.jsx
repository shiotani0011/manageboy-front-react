import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

export const Create = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <div>
        <p
          style={{
            fontSize: 36,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          登録フォーム
        </p>
        <hr size="1" />
        <div>
          <Grid container alignItems="center" justify="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={12}>
                <TextField
                  label="性(漢字)"
                  type="text"
                  name="first_name"
                  size="medium"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="名前(漢字)"
                  type="text"
                  name="last_name"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="性(カナ)"
                  type="text"
                  name="first_name_kana"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="名前(カナ)"
                  type="text"
                  name="last_name_kana"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="GitHub_ID"
                  type="text"
                  name="github_id"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="リポジトリURL"
                  type="text"
                  name="repo"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Twitter_ID"
                  type="text"
                  name="twitter_id"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="受講期間"
                  type="text"
                  name="start_date"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="備考"
                  type="text"
                  name="memo"
                  size="normal"
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 20 })}
                  error={Boolean(errors.title)}
                  helperText={
                    errors.title && "タイトルは20文字以内にして下さい。"
                  }
                />
              </Grid>
              <input type="submit" />
            </form>
          </Grid>
        </div>
      </div>
    </>
  );
};
