import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./TaskDisplay.module.css";

const TaskDisplay = (props) => {
  const removeTask = (event) => {
    props.onRemoveTask(event.target.id);
  };

  const taskList = props.taskList.map((task, index) => (
    <Card className={classes.task} key={index}>
      {task}
      <Button id={index} onClick={removeTask}>
        Complete
      </Button>
    </Card>
  ));

  return (
    <Card className={classes.list}>
      <h1>To-Do</h1>
      {taskList}
    </Card>
  );
};

export default TaskDisplay;
