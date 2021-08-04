import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import BtnForComment from "../Comment/ButtonForComment/buttonForComment";
import "./response.css";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Response = () => {
  const classes = useStyles();
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details) {
      console.log(details);
    }
  };
  return (
    <div className="resp">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          id="standard-basic"
          label="Залишіть Ваш відгук"
        />
        <br />
        <BtnForComment />
      </form>
    </div>
  );
};

export default Response;
