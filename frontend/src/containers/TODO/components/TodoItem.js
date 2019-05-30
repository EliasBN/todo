import React from "react";
import Popup from "reactjs-popup";
import TextInput from "../../../components/TextInput";

const styling = {};

//Change to be a class that handles axios.
export default function TodoItem({
  title,
  id,
  createdAt,
  updatedAt,
  handleDelete,
  handleEdit,
  chooseList,
  onSubmit,
  onChange,
  value
}) {
  return (
    <div class="row">
      <div class="col s12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{title}</span>
          </div>

          <div class="right-align">
            <div class="col s12">
              <div class="card-action">
                <button
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    chooseList(id);
                  }}
                >
                  <i class="material-icons">arrow_right_alt</i>
                </button>

                <button
                  style={styling}
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this list?"
                      )
                    )
                      handleDelete(id);
                  }}
                >
                  <i class="material-icons">not_interested</i>
                </button>

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
              </div>
            </div>
          </div>
          <div class="right-align">{id}</div>
        </div>
      </div>
    </div>
  );
}
