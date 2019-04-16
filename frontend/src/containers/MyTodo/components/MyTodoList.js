import React from "react";
import MyTodoItem from "./MyTodoItem";

//We may have to include list-name in URL to get name of each list.

const List = props => {
  return (
    <div>
      {props.list.map(item => (
        <MyTodoItem
          key={item.id}
          keys={item.id}
          id={item.id}
          content={item.content}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
          handleDelete={props.handleDelete}
          onChange={props.onChange}
          value={props.value}
          onSubmit={props.onSubmit}
          handleEdit={props.handleEdit}
        />
      ))}
    </div>
  );
};

export default List;
