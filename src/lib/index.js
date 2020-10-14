import collatedTasks from 'constants/index';

export const collatedTasksExists = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export default collatedTasksExists;
