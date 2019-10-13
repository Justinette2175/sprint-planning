
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Box,
} from '@material-ui/core';



function SprintPage(props) {
  const [groupProjects, updateGroupProjects] = useState([]);
  const [selectedProjects, updateSelectedProjects] = useState(props.projectsInSprint);

  useEffect(() => {
    fetch(`/api/sprints/`)
      .then((data) => data.json())
      .then((data) => {
        console.log('data', data)
        updateSprints(data)
      });
  }, []);

  useEffect(() => {
    props.updateProjectsForSprint(selectedProjects)
  }, [selectedProjects]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        Select a sprint to continue editing it
      </Typography>
    </Container>
  )
}

export default SprintPage;
