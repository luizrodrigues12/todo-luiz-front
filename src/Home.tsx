import AddForm from "./components/AddForm";

import List from "./components/List";

const Home = () => {
  return (
    <div>
      <div className="container-todo">
        <h1>To-do List</h1>
        <AddForm />
        <List />
      </div>
    </div>
  );
};

export default Home;
