import React from "react";
import Popup from "reactjs-popup";
import TextInput from "../../../components/TextInput";

export default function MyTodoItem({
  id,
  content,
  complete,
  createdAt,
  updatedAt,
  handleDelete,
  handleEdit,
  onSubmit,
  onChange,
  value,
  item,
  keys
}) {
  return (
    <div className="card-panel">
      <div>
        <span className="flow-text">
          <p className="flow-text center blue-text">{content}</p>
        </span>
      </div>
      <div>
        <Popup
          trigger={
            <button className="waves-effect waves-light btn">
              <i className="material-icons">build</i>
            </button>
          }
        >
          {
            <form className="col s12" onSubmit={onSubmit}>
              <div className="row">
                <div className="input-field col s11">
                  <TextInput
                    value={value}
                    onChange={onChange}
                    className="validate"
                  />
                </div>

                <div className="input-field col s1">
                  <button
                    className="waves-effect waves-light btn"
                    onClick={() => {
                      handleEdit(id);
                    }}
                  >
                    <i class="material-icons"> build </i>
                  </button>
                </div>
              </div>
            </form>
          }
        </Popup>
        <div>
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                handleDelete(id);
            }}
          >
            <i className="material-icons">not_interested</i>
          </button>
        </div>
      </div>
    </div>
  );
}
