import React, { useState } from 'react';

import React from 'react';

export const IndividualProject = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProjects } = useSelectedProjectValue();
  const deleteProject = (docId) => {
    db.firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };
  return <div></div>;
};
