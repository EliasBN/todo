import React from "react";

const styling = {};

export default function TodoItem({ item, index, handleDelete }) {
  return (
    <li class="collection-item">
      {item}

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
