import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Table from "./components/table";
function App() {
  const [inputData, setInputData] = useState([]);
  const handleSubmit = (data) => {
    setInputData((prevData) => [...prevData, data]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Table data={inputData} />
    </>
  );
}

export default App;
