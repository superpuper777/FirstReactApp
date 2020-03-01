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
  let dialogsData = [
    { id: 1, name: "Alenka" },
    { id: 2, name: "Lesha" }
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I know what you did last summer" }
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.allMessages}>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
