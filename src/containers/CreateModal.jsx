import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { HistoryRounded } from "@material-ui/icons";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const CreateModal = (props) => {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    // 入力したデータ
    const params = {
      first_name: data.first_name,
      last_name: data.last_name,
      first_name_kana: data.first_name_kana,
      last_name_kana: data.last_name_kana,
      github_id: data.github_id,
      twitter_id: data.twitter_id,
      repository_url: data.repository_url,
      start_date: data.start_date,
      memo: data.memo,
    };
    // console.log(params);

    await updateMember(params);
    handleClose();
    history.push(`/find/4`);
  };
  console.log(errors);

  const updateMember = async (params) => {
    try {
      await axios.put(
        `http://localhost:4001/api/members/${props.memberId}`,
        params,
        { withCredentials: true }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const update = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.dataName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          label={props.updateData}
          type="text"
          name={props.updateName}
          ref={register}
        />
        <input type="submit" />
      </form>
    </div>
  );

  const updateSub = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.dataName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>氏名</p>
        <input
          label={props.updateData}
          type="text"
          name={props.updateName}
          ref={register}
        />
        <p>名前</p>
        <input
          label={props.updateDataSub}
          type="text"
          name={props.updateNameSub}
          ref={register}
        />
        <input type="submit" />
      </form>
    </div>
  );

  const updateMemo = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.dataName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          label={props.updateData}
          type="date"
          name={props.updateName}
          ref={register}
        />
        <input type="submit" />
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {props.modalName}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {props.updateNameSub
          ? updateSub
          : props.updateName === "start_date"
          ? updateMemo
          : update}
      </Modal>
    </div>
  );
};
