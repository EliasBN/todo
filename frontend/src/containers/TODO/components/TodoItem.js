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
  onClick
}) {
  return (
    <li class="collection-item">
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue">
            <div class="card-content white-text">
              <span class="card-title">{title}</span>
              <div class="card-content">
                {createdAt}
                <br />
                {updatedAt}
              </div>
              <div class="right-align">{id}</div>
            </div>
          </div>
        </div>

        <button
          style={styling}
          className="btn-floating btn-small waves-effect waves-light blue"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <i class="material-icons">not_interested</i>
        </button>

        <button
          style={styling}
          className="btn-floating btn-small waves-effect waves-light blue"
          onClick={() => {
            handleEdit(id);
          }}
        >
          <i class="material-icons">autorenew</i>
        </button>

        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            onClick(id);
          }}
        >
          <i class="material-icons">arrow_right_alt</i>
        </button>
      </div>
    </li>
  );
}
