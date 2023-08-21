import { Fragment, useEffect, useState } from "react";

import TaskDisplay from "./components/Task/TaskDisplay";
import NewTask from "./components/Task/NewTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
  };

  const removeTaskHandler = (task) => {
    setTasks((prevState) => {
      const front = prevState.slice(0, task);
      const back = prevState.slice(+task + 1);
      return front.concat(back);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("Tasks")) {
      setTasks(localStorage.getItem("Tasks").split("///").slice(0, -1));
    }
  }, []);

  useEffect(() => {
    const taskList = tasks.map((task) => task.concat("///"));
    const taskString = taskList.join("");
    localStorage.setItem("Tasks", taskString);
  }, [tasks]);

  return (
    <Fragment>
      <NewTask onAddTask={addTaskHandler} />
      {tasks.length > 0 && (
        <TaskDisplay taskList={tasks} onRemoveTask={removeTaskHandler} />
      )}
    </Fragment>
  );
};

export default App;

/***   Old code kept for reference   ***/

/***   Using localStorage in addTaskHandler   ***/
// const taskList = localStorage.getItem("Tasks");
// if (taskList) {
//   localStorage.setItem("Tasks", [taskList.concat(`${task}///`)]);
// } else {
//   localStorage.setItem("Tasks", task.concat("///"));
// }
// setTasks(localStorage.getItem("Tasks").split("///").slice(0, -1));

/***   Using localStorage in removeTaskHandler   ***/
// const taskList = localStorage.getItem("Tasks").split("///");
// const front = taskList.slice(0, task);
// const back = taskList.slice(+task + 1);
// const newTaskList = [...front, ...back].map((item) => item.concat("///"));
// localStorage.setItem("Tasks", newTaskList.slice(0, -1).join(""));
// setTasks(localStorage.getItem("Tasks").split("///").slice(0, -1));
