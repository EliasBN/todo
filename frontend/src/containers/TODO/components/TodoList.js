import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <div class="center">
      <h4>My Lists</h4>
      {props.list.map(item => (
        <TodoItem
          chooseList={props.chooseList}
          id={item.id}
          key={item.id}
          title={item.title}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          value={props.value}
        />
      ))}
    </div>
  );
};

export default List;
