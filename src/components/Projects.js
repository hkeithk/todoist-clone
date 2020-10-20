import React, { useState } from 'react';
import { setSelectedProject, useProjectsValue, useSelectedProjectValue } from 'context';
import { ListItem } from '@material-ui/core';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  const onClickHandler = (projectId) => {
    setActive(projectId);
    setSelectedProject(projectId);
  };

  console.log(projects);

  //add a dropdown that will display the projects depending on if its active or not
  return (
    projects &&
    projects.map((project) => (
      <ListItem
        key={project.projectId}
        data-doc-id={project.docId}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        I am a project
      </ListItem>
    ))
  );
};

export default Projects;
