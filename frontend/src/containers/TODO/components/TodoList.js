import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <ul class="collection">
      {props.list.map((item, index) => (
        <TodoItem key={index} item={item.name} />
      ))}
    </ul>
  );
};

export default List;
