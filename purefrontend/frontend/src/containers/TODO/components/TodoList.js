import React from "react";
import TodoItem from "./TodoItem";

const List = props => {
  return (
    <div class="center">
      <h4>My Lists</h4>
      {props.list.map((item,index) => (
        <TodoItem
          chooseList={props.chooseList}
         
          key={index}
          item={item.name}
          itemIndex={index}
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
