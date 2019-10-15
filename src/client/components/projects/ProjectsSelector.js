import React, { useState, useEffect } from 'react';

import {
  Box,
  Chip,
} from '@material-ui/core';


function ProjectsSelector({ onClickSelectedProject, onClickUnselectedProject, projectsInSprint }) {

  const [projects, updateProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((data) => data.json())
      .then((data) => updateProjects(data));
  }, []);

  const handleProjectClick = (id) => {
    if (Array.isArray(projectsInSprint)) {
      const indexOfIdInProjects = projectsInSprint.indexOf(id);
      if (indexOfIdInProjects > -1) {
        onClickSelectedProject(id);
      } else {
        onClickUnselectedProject(id);
      }
    }
  };

  return (
    <Box>
      {projects.length > 0 && projects.map((item) => {
        return (
          <Chip
            key={item._id}
            label={item.name}
            onClick={() => handleProjectClick(item._id)}
            color={projectsInSprint.indexOf(item._id) > -1 ? 'primary' : 'default'}
          />
        );
      })}
    </Box>
  );
}

export default ProjectsSelector;
