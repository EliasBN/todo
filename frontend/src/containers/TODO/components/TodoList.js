import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>My Lists</h4>
        {props.list.map(item => (
          <TodoItem
            onClick={props.onClick}
            id={item.id}
            key={item.id}
            title={item.title}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        ))}
      </li>
    </ul>
  );
};

export default List;
