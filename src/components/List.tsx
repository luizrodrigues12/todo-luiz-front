import axios from "axios";
import { useEffect, useState } from "react";
import { BsCheckCircleFill, BsCircleFill } from "react-icons/bs";
import { BiTrash, BiSolidPencil } from "react-icons/bi";
import EditForm from "../components/EditForm";

import * as listController from "../controllers/ListController";

type Task = {
  title: string;
  done: boolean;
  _id: string;
};

const List = () => {
  const [listTodo, setListTodo] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://todo-luiz-back.onrender.com/get")
      .then((result) => setListTodo(result.data))
      .catch((err) => console.log(err));

    // eslint-disable-next-line no-constant-condition
    setInterval(() => {
      location.reload();
    }, 60000 * 3);
  }, []);

  return (
    <div>
      {listTodo
        ? listTodo.map((task, i) => (
            <div key={i} className="task-title">
              <p className={task.done ? "task-done" : "pendent-task"}>
                {task.title}
              </p>
              <div>
                {task.done ? (
                  <BsCheckCircleFill
                    className="icon-check"
                    onClick={() => listController.checkEdit(task._id)}
                  />
                ) : (
                  <BsCircleFill
                    className="icon-check"
                    onClick={() => listController.checkEdit(task._id)}
                  />
                )}
                <BiSolidPencil
                  className="icon-pencil"
                  onClick={() => {
                    setTaskId(task._id);
                    listController.editTask();
                    setShowEditForm(true);
                  }}
                />
                <BiTrash
                  className="icon-trash"
                  onClick={() => listController.deleteTask(task._id)}
                />
              </div>
            </div>
          ))
        : "No Record"}
      {showEditForm ? <EditForm taskId={taskId} /> : ""}
    </div>
  );
};

export default List;
