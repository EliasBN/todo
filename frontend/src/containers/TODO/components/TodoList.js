import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>MY TODO LIST</h4>
        {props.list.map(item => (
          <TodoItem
            id={item.id}
            item={item.title}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            handleDelete={props.handleDelete}
          />
        ))}
      </li>
    </ul>
  );
};

export default List;
