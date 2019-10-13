import React, { useState, useEffect } from 'react';

import {
  Box,
  Chip,
} from '@material-ui/core';


function ProjectsSelector() {

  const [projects, updateProjects] = useState([]);
  const [selectedProjects, updateSelectedProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((data) => data.json())
      .then((data) => updateProjects(data));
  }, []);


  function handleProjectClick(id) {
    const indexOfIdInProjects = selectedProjects.indexOf(id);
    if (indexOfIdInProjects > -1) {
      const newProjects = [...selectedProjects];
      newProjects.splice(indexOfIdInProjects, 1);
      updateSelectedProjects(newProjects);
    } else {
      updateSelectedProjects([...selectedProjects, id]);
    }
  }

  return (
    <Box>
      {projects.length > 0 && projects.map((item) => {
        return (
          <Chip
            key={item._id}
            label={item.name}
            onClick={() => handleProjectClick(item._id)}
            color="primary"
          />
        );
      })}
    </Box>
  );
}

export default ProjectsSelector;
