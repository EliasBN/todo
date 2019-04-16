import React from "react";

const styling = {};

//Change to be a class that handles axios.
export default function TodoItem({
  title,
  id,
  createdAt,
  updatedAt,
  handleDelete,
  handleEdit,
  chooseList
}) {
  return (
    <ul class="collection">
      <li class="collection-item">
        <div class="card ">
          <div class="row">
            <div class="col s12">
              <div class="card-content">
                <span class="card-title">{title}</span>
              </div>

              <div class="card-action">
                {" "}
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
                    handleEdit(id);
                  }}
                >
                  <i class="material-icons">build</i>
                </button>
                <button
                  style={styling}
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  <i class="material-icons">not_interested</i>
                </button>
              </div>
              <div class="right-align">{id}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
