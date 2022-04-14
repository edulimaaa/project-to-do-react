import { useState, useEffect } from "react";
import List from "./List";
import {parse, v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import SubItems from "../project/ProjectSubItems";

function Contents() {
  const { id } = useParams(); //pegar os ID do banco de bados

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:4000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function createService(project) {
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();


    //update project
    fetch(`http://localhost:4000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
       
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {project.map((project) => (
        <List id={project.id} name={project.name} />
        
       
      ))}
      <br></br>
       <SubItems 
       handleSubmit={createService}
       btnText='Adicionar tarefa'
       projectData={project}
       />
    </div>
  );
}

export default Contents;
