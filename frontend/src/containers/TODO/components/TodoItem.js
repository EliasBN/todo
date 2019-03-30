import React from "react";

export default function TodoItem({ item, itemIndex, handleDelete }) {
  return (
    <li class="collection-item">
      {item}
      <button
        className="btn-floating btn-small waves-effect waves-light blue"
        onClick={() => {
          handleDelete(itemIndex);
        }}
      >
        <i class="material-icons">not_interested</i>
      </button>
    </li>
  );
}
