import * as listController from "../controllers/ListController";
import { useState } from "react";

const EditForm = ({ taskId }: { taskId: string }) => {
  const [newTitle, setNewTitle] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="edit-form">
        <h2>Edit Task</h2>
        <input
          type="text"
          className="edit-input"
          onChange={(e) => setNewTitle(e.target.value.trim())}
          placeholder="New title"
        />
        <div edit-buttons>
          <input
            type="button"
            className="edit-button"
            value="Save"
            onClick={() => listController.saveTask(taskId, newTitle)}
          />
          <input
            type="button"
            value="Cancel"
            className="cancel-button"
            onClick={() => location.reload()}
          />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
