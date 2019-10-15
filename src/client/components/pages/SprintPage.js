
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import {
  Container,
  Typography,
} from '@material-ui/core';

import ProjectsSelector from '../projects/ProjectsSelector';
import { formatTime } from '../../utils/utils';

function SprintPage(props) {
  const { sprintId } = props.match.params;

  const [sprintInfo, setSprintInfo] = useState({
    name: '',
    startDate: '',
    endDate: '',
    _id: sprintId,
    projects: [],
  });

  useEffect(() => {
    fetch(`/api/sprints/${sprintId}`)
      .then((data) => data.json())
      .then((data) => setSprintInfo(data));
  }, []);

  const addProjectToSprint = (projectId) => {
    return fetch(`/api/sprints/${sprintId}/projects/${projectId}`, {
      method: 'POST',
    })
      .then((data) => data.json())
      .then((data) => setSprintInfo(data));
  };

  const removeProjectFromSprint = (projectId) => {
    return fetch(`/api/sprints/${sprintId}/projects/${projectId}`, {
      method: 'DELETE',
    })
      .then((data) => data.json())
      .then((data) => setSprintInfo(data));
  };

  return (
    //TODO - Loader + hide "undefined" on date
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        {`${sprintInfo.name} / From ${formatTime(sprintInfo.startDate)} to ${formatTime(sprintInfo.endDate)}`}
      </Typography>
      <ProjectsSelector
        onClickSelectedProject={(projectId) => removeProjectFromSprint(projectId)}
        onClickUnselectedProject={(projectId) => addProjectToSprint(projectId)}
        projectsInSprint={sprintInfo.projects}
      />
    </Container>
  );
}

export default withRouter(SprintPage);
