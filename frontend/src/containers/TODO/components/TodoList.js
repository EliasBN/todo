import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>MY TODO LIST</h4>
        {props.list.map((item, index) => (
          <TodoItem key={index} item={item.name} />
        ))}
      </li>
    </ul>
  );
};

export default List;
