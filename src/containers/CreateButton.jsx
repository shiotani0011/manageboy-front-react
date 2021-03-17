import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const CreateButton = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const handleRmToken = () => {
    const rmToken = localStorage.removeItem("token");
    if (rmToken !== null) {
      history.push("/login");
    } else {
    }
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={props.handle}>
        {props.buttonName}
      </Button>
    </div>
  );
};
