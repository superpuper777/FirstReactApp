import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>
        <DialogItem name="Alenka" id="1" />
        <DialogItem name="Lesha" id="2" />
      </div>
      <div className={s.allMessages}>
        <MessageItem message="Hi" />
        <MessageItem message="How are you?" />
        <MessageItem message="I know what you did last summer" />
      </div>
    </div>
  );
};

export default Dialogs;
