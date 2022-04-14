import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Contents.module.css";
import { v4 as uuidv4 } from "uuid";

import List from "./List";

function ListSideBar() {
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.list)
      })
      .catch((err) => console.log(err));
  }, []);

  function createService(project) {
    const lastService = project.list[project.list.length - 1];

    lastService.id = uuidv4();
  }




  return (
    <div>
      {project.map((project) => (
        <Routes>
          <Route
            className={styles.contents}
            path={`/${project.id}`}
            element={
              project.list == "" ? (
                ""
              ) : (
                <div className={styles.contents}> {project.list}</div>
              )
            }
          />
        </Routes>
      ))}
    </div>
  );
}

export default ListSideBar;
