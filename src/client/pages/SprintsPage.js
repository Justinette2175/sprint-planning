import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Box,
} from '@material-ui/core';

import SprintPreview from '../components/SprintPreview';


function SprintsPage(props) {
  const [sprints, updateSprints] = useState([]);

  useEffect(() => {
    fetch('/api/sprints')
      .then((data) => data.json())
      .then((data) => {
        console.log('data', data)
        updateSprints(data)
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        Select a sprint to continue editing it
      </Typography>
      {sprints && sprints.length > 0 && (
        sprints.map((s) => (
          <Link to={`/sprints/${s._id}`}>
            <SprintPreview
              title={s.name}
              endDate={s.endDate}
              startDate={s.startDate}
              key={s._id}
            />
          </Link>
        ))
      )}
      {sprints && sprints.length < 1 && (
        <Box>
          <Typography component="p">
            You have no saved sprints. Create a new one to get started!
          </Typography>
        </Box>
      )}
      <Link to={'sprints/new'}><Button variant="contained" color="primary">Create a sprint</Button></Link>
    </Container>
  )
}

export default SprintsPage;
