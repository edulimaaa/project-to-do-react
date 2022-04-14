import ListSideBar from "./ListSideBar";
import ProjectForm from "./ProjectForm";
//Adicionando o projeto no BANCO DE DADOS
function Project() {
  function createPost(project) {
    
    project.lists = [];

    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        //redirect
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ListSideBar/>
      <ProjectForm handleSubmit={createPost} btnText="hello" />
    </div>
  );
}

export default Project;
