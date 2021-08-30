import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

const Todo = () => {
  const [cancel, setCancel] = useState(false);
  return (
    <div>
      <div className="chat-nav">
        <MoreHorizIcon />
        <p>Todo List</p>
        <AddIcon />
      </div>
      <div className="todo-body">
        <ul>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          <li className="todo-content">
            <input
              type="checkbox"
              onChange={() => {
                setCancel(!cancel);
              }}
            />
            <span className={cancel ? "todo-info cancel" : "todo-info"}>
              Lorem ipsum dolor sit.
            </span>
            <div className="todo-badge">
              <QueryBuilderIcon />
              <p>2mins</p>
            </div>
            <div className="tools">
              <EditIcon />
              <DeleteIcon />
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Todo;
