import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState([]);

  function submit(e) {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  return (
    <form className={styles.project_form} onSubmit={submit}>
      <Input
        type="text"
        text="Add tarefa"
        name="name"
        placeholder="Adicionar uma tarefa"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
        //condição ? valor se for verdareiro : valor se for falso
      />
      <SubmitButton text="Add +" />
    </form>
  );
}

export default ProjectForm;
