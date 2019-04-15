import React from "react";
import MyTodoItem from "./MyTodoItem";

//We may have to include list-name in URL to get name of each list.

const List = props => {
  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{props.name}</h4>
        {props.list.map(item => (
          <MyTodoItem
            chooseList={props.chooseList}
            id={item.id}
            key={item.id}
            content={item.content}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            todoId={props.todoId}
          />
        ))}
      </li>
    </ul>
  );
};

export default List;
