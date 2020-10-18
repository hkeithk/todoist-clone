import React, { createContext, useContext } from 'react';
import { useProjects } from 'hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  //destructure projects and setProjects from firebase to be used in consumer, pass children through
  const { projects, setProjects } = useProjects();
  return <ProjectsContext.Provider value={{ projects, setProjects }}>{children}</ProjectsContext.Provider>;
};

export const useProjectsValue = () => useContext(ProjectsContext);
