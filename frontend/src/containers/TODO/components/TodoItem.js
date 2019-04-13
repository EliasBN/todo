import React from "react";

const styling = {};

//Change to be a class that handles axios.
export default function TodoItem({
  item,
  index,
  createdAt,
  updatedAt,
  handleDelete,
  id
}) {
  return (
    <li class="collection-item">
      <div class="card">
        {item}
        <div class="card-content">
          {createdAt}
          {updatedAt}
        </div>
        {id}
      </div>
      <button
        style={styling}
        className="btn-floating btn-small waves-effect waves-light blue"
        onClick={() => {
          handleDelete(index);
        }}
      >
        <i class="material-icons">not_interested</i>
      </button>
    </li>
  );
}
