
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import {
  Container,
  Typography,
} from '@material-ui/core';

import ProjectsSelector from '../projects/ProjectsSelector';
import MemberBlockSelector from '../members/MemberBlockSelector';
import TaskAssigner from '../dndAssignation/TaskAssigner';

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
  const [membersInfo, setMembersInfo] = useState([]);

  const getSprintInfo = async () => fetch(`/api/sprints/${sprintId}`)
    .then((data) => data.json())
    .then((data) => {
      setSprintInfo(data);
    });
  
  const getMembersInfo = async () => fetch('/api/members/')
    .then((data) => data.json())
    .then((data) => {
      setMembersInfo(data);
    });
  
  useEffect(() => {
    getMembersInfo();
    getSprintInfo();
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
      <MemberBlockSelector
        sprintId={sprintId}
        members={membersInfo}
      />
      <TaskAssigner
        members={membersInfo}
        sprintId={sprintId}
        projects={sprintInfo.projects}
      />
    </Container>
  );
}

export default withRouter(SprintPage);
