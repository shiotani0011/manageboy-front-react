import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import axios from "axios";
import { DEFAULT_API_LOCALHOST } from "../config/env";
import { fetchMembers } from "../apis/auth.api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

export const Create = (props) => {
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
  const [member, setMember] = useState({
    id: 1,
    first_name: "",
    last_name: "",
    first_name_kana: "",
    last_name_kana: "",
    github_id: "",
    twitter_id: "",
    repository_url: "",
    start_date: "",
    memo: "",
  });

  const postMember = async (data) => {
    try {
      await axios
        .post(
          "http://localhost:4001/api/members",
          {
            member: member,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("data", data);
          console.log("res data", res);
          console.log("res data", res.data.first_name);

          setMembers([
            ...members,
            {
              id: 11,
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              first_name_kana: res.data.first_name_kana,
              last_name_kana: res.data.last_name_kana,
              github_id: res.data.github_id,
              repository_url: res.data.repository_url,
              twitter_id: res.data.twitter_id,
              start_date: res.data.start_date,
              memo: res.data.memo,
            },
          ]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    console.log(data); // 入力したデータ

    await postMember(data);
  };
  console.log(errors);

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
                  name="first_name"
                  size="medium"
                  margin="normal"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
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
                  name="last_name"
                  size="normal"
                  margin="normal"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
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
                  name="first_name_kana"
                  size="normal"
                  margin="normal"
                  value={firstNameKana}
                  onChange={(e) => setFirstNameKana(e.target.value)}
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
                  value={lastNameKana}
                  onChange={(e) => setLastNameKana(e.target.value)}
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
                  value={githubId}
                  onChange={(e) => setGithubId(e.target.value)}
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
                  name="repository_url"
                  size="normal"
                  margin="normal"
                  value={repositoryUrl}
                  onChange={(e) => setRepositoryUrl(e.target.value)}
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
                  value={twitterId}
                  onChange={(e) => setTwitterId(e.target.value)}
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
                  type="date"
                  name="start_date"
                  size="normal"
                  margin="normal"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
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
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
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
