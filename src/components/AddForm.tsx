import axios from "axios";
import { useState } from "react";

//Functions
const AddForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [showParagraph, setShowParagraph] = useState(false);

  const createTask = async () => {
    if (taskTitle) {
      setShowParagraph(false);
      await axios
        .post("https://todo-luiz-back.onrender.com/add", { title: taskTitle })
        .then((result) => {
          console.log(result);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      setTaskTitle("");

      //Limpar Input
    } else {
      setShowParagraph(true);
    }
  };

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          className="add-input"
          onChange={(e) => setTaskTitle(e.target.value.trim())}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              createTask();
            }
          }}
        />
        <button type="button" onClick={createTask}>
          Add
        </button>
      </div>
      <p
        className={
          showParagraph ? "error-paragraph show" : "error-paragraph no-show"
        }
      >
        Digite algo para adicionar à lista.
      </p>
    </div>
  );
};

export default AddForm;
