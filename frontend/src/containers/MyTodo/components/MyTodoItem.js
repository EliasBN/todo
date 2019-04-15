import React from "react";

export default function MyTodoItem({
  id,
  content,
  complete,
  createdAt,
  updatedAt,
  todoId,
  handleDelete,
  handleEdit,
  chooseList
}) {
  return (
    <li class="collection-item">
      <div class="row">
        <div class="col s12 m6">
          <div class="card ">
            <div class="card-content">
              <span class="card-title" />
              <div class="card-content">
                {content}

                <br />
              </div>
              <div class="right-align" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="waves-effect waves-light btn"
        onClick={() => {
          handleEdit(id);
        }}
      >
        <i class="material-icons">build</i>
      </button>

      <button
        className="waves-effect waves-light btn"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <i class="material-icons">not_interested</i>
      </button>
    </li>
  );
}
