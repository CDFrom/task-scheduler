import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddTask.module.css";

const AddTask = (props) => {
  return (
    <Card className={classes["create-new-task"]}>
      <Button onClick={props.onOpenTaskForm}>Create New Task</Button>
    </Card>
  );
};

export default AddTask;
