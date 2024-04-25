import axios from "axios";

const host = "https://todo-luiz-back.onrender.com";

export const checkEdit = (id: string) => {
  axios
    .put(`${host}/update/${id}`)
    .then(() => {
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTask = (id: string) => {
  axios
    .delete(`${host}/delete/${id}`)
    .then(() => {
      location.reload();
    })
    .catch((err) => console.log(err));
};

export const editTask = () => {};

export const saveTask = (id: string, newTitle: string) => {
  if (newTitle) {
    axios
      .put(`${host}/updateone/${id}`, { title: newTitle })
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => console.log(error));
  } else {
    alert("Dados inválidos!");
  }
};
