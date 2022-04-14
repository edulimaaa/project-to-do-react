import { useState } from "react";
import Input from "../forms/Input";
import SubmitButton from "../forms/SubmitButton";

function SubItems({ handleSubmit, btnText, projectData }) {
  const [list, setList] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.lists.push(list);
    handleSubmit(projectData);
  }

  function handleChange(event) {
    setList({ ...list, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome da lista"
        name="name"
        placeholder="insira a tarefa"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default SubItems;
