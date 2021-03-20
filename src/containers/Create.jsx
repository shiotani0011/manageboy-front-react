import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import axios from "axios";
import { DEFAULT_API_LOCALHOST } from "../config/env";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

export const Create = () => {
  const [members, setMembers] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameKana, setFirstNameKana] = useState("");
  const [lastNameKana, setLastNameKana] = useState("");
  const [githubId, setGithubId] = useState("");
  const [twitterId, setTwitterId] = useState("");
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [memo, setMemo] = useState("");

  const postMember = async (data) => {
    console.log("data", data);
    await axios
      .post(
        "http://localhost:4001/api/create",
        {
          member: {
            first_name: firstName,
            last_name: lastName,
            first_name_kana: firstNameKana,
            last_name_kana: lastNameKana,
            github_id: githubId,
            twitter_id: twitterId,
            repository_url: repositoryUrl,
            start_date: startDate,
            memo: memo,
          },
        }
        // { withCredentials: true }
      )
      .then((res) => {
        console.log("data", data);
        console.log("res data", res.data);
        setMembers([...members, res.data]);
      });
  };

  const onSubmit = async (data) => {
    console.log(data); // 入力したデータ

    await postMember(data);
  };
  console.log(errors);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${DEFAULT_API_LOCALHOST}/api/members`);
      console.log(result);
      console.log(result.data);
      setMembers(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Box
          fontSize="36"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          登録フォーム
        </Box>
        <hr size="1" />
        <div>
          <Grid container alignItems="center" justify="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={12}>
                <TextField
                  label="性(漢字)"
                  type="text"
                  id="first_name"
                  name="first_name"
                  size="medium"
                  margin="normal"
                  onChange={(data) => {
                    setFirstName(data.target.value);
                  }}
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
                  id="last_name"
                  name="last_name"
                  size="normal"
                  margin="normal"
                  value={lastName}
                  onChange={(data) => {
                    setLastName(data.target.value);
                  }}
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
                  id="first_name_kana"
                  name="first_name_kana"
                  size="normal"
                  margin="normal"
                  value={firstNameKana}
                  onChange={(data) => {
                    setFirstNameKana(data.target.value);
                  }}
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
                  id="last_name_kana"
                  name="last_name_kana"
                  size="normal"
                  margin="normal"
                  value={lastNameKana}
                  onChange={(data) => {
                    setLastNameKana(data.target.value);
                  }}
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
                  id="github_id"
                  name="github_id"
                  size="normal"
                  margin="normal"
                  value={githubId}
                  onChange={(data) => {
                    setGithubId(data.target.value);
                  }}
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
                  id="repository_url"
                  name="repository_url"
                  size="normal"
                  margin="normal"
                  value={repositoryUrl}
                  onChange={(data) => {
                    setRepositoryUrl(data.target.value);
                  }}
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
                  id="twitter_id"
                  name="twitter_id"
                  size="normal"
                  margin="normal"
                  value={twitterId}
                  onChange={(data) => {
                    setTwitterId(data.target.value);
                  }}
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
                  id="start_date"
                  name="start_date"
                  size="normal"
                  margin="normal"
                  value={startDate}
                  onChange={(data) => {
                    setStartDate(data.target.value);
                  }}
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
                  id="memo"
                  name="memo"
                  size="normal"
                  margin="normal"
                  value={memo}
                  onChange={(data) => {
                    setMemo(data.target.value);
                  }}
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
