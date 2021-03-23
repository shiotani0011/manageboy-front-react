import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";

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
  const [memberData, setMemberData] = useState(() => {
    const initialState = props.updateData;
    return initialState;
  });

  useEffect(() => {
    console.log(memberData);
  });

  // console.log(updateName);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    // 入力したデータ

    await updateMember(data);
  };
  console.log(errors);

  const updateMember = async (data) => {
    await axios
      .patch(`http://localhost:4001/api/members/${props.memberId}`, {
        first_name: memberData,
      })
      .then((res) => {
        console.log(memberData);

        setMemberData({
          first_name: memberData,
        });
      })
      .catch((data) => {
        console.log(data);
      });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.dataName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="update"
          value={memberData}
          onChange={(e) => setMemberData(e.target.value)}
        />
        <button type="submit">更新</button>
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
        {body}
      </Modal>
    </div>
  );
};
