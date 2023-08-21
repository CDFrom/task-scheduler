import { useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const titleRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const task = titleRef.current.value;
    if (task.trim().length === 0) {
      return;
    }

    props.onAddTask(task);
    titleRef.current.value = "";
  };

  return (
    <Card className={classes["new-task"]}>
      <p id={classes["close-window"]} onClick={props.onCloseTaskForm}>
        X
      </p>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>New Task</h1>
        <div className={classes.action}>
          <label htmlFor='form-title'>Title:</label>
          <input type='text' name='title' id='form-title' ref={titleRef} />
        </div>
        <Button className={classes.button} type='submit'>
          Add
        </Button>
      </form>
    </Card>
  );
};

export default TaskForm;
