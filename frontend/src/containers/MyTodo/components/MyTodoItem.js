import React from "react";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function MyTodoItem({
  id,
  content,
  complete,
  createdAt,
  updatedAt,
  todoId,
  handleDelete,
  handleEdit,
  chooseList,
  inputForm
}) {
  return (
    <div className="row">
      <div className="col s11">
        <span className="flow-text">
          <p className="flow-text center">{content}</p>
        </span>
      </div>
      <div className="col s1">
        <Popup
          trigger={
            <button
              className="waves-effect waves-light btn"
              onClick={() => {
                handleEdit(id);
              }}
            >
              <i className="material-icons">build</i>
            </button>
          }
        >
          <div className="content">{inputForm}</div>
        </Popup>

        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <i className="material-icons">not_interested</i>
        </button>
      </div>
    </div>
  );
}
