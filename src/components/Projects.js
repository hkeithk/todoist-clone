import React, { useState } from 'react';
import { setSelectedProject, useProjectsValue } from 'context';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  const onClickHandler = (projectId) => {
    setActive(projectId);
    setSelectedProject(projectId);
  };

  //add a dropdown that will display the projects depending on if its active or not
  return (
    projects &&
    projects.map((project) => (
      <ListItem
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid=' project-action'
        onClick={() => onClickHandler(project.projectId)}
      >
        I am a project
      </ListItem>
    ))
  );
};

export default Projects;
