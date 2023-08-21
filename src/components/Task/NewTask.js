import { Fragment, useState } from "react";

import TaskForm from "./TaskForm";
import AddTask from "./AddTask";

const NewTask = (props) => {
  const [newTaskIsShown, setNewTaskIsShown] = useState(false);

  const openTaskFormHandler = () => {
    setNewTaskIsShown(true);
  };

  const closeTaskFormHandler = () => {
    setNewTaskIsShown(false);
  };

  return (
    <Fragment>
      {!newTaskIsShown && <AddTask onOpenTaskForm={openTaskFormHandler} />}
      {newTaskIsShown && (
        <TaskForm
          onCloseTaskForm={closeTaskFormHandler}
          onAddTask={props.onAddTask}
        />
      )}
    </Fragment>
  );
};

export default NewTask;
