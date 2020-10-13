import { useState, useEffect } from 'react';
import { firebase } from 'firebase';
import { collatedTasksExist } from 'lib';
import moment from 'moment';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', 'fewaf23io423ferw9f0');

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribed.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? unsubscribe == unsubscribe.where('date', '==', '')
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      //if NEXT_7 is selected, filter arr and return only values where the day is within 7 days of today and not archived
      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true,
            )
          : newTasks.filter((task) => task.archived !== true),
      );

      setArchivedTasks(newTask.filter((task) => task.archived !== false));
    });

    return () => unsubscribed();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'fewaf23io423ferw9f0')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...product.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return projects;
};
