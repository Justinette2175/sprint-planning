import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

import Task from '../tasks/Task';
import DraggableTaskWrapper from './DraggableTaskWrapper';

const fetchIssuesInProject = async (projectId) => {
  const tasks = await fetch(`/api/projects/${projectId}/tasks`);
  const jsonTasks = await tasks.json();
  return jsonTasks;
};

function TaskList({ projectIds }) {
  const [tasks, updateTasks] = useState([]);

  const fetchTasksInSprintProjects = async (ids) => {
    const promises = ids.map(fetchIssuesInProject);
    const t = await Promise.all(promises);
    const mergedTasks = [].concat.apply([], t);
    updateTasks(mergedTasks);
  };

  useEffect(() => {
    fetchTasksInSprintProjects(projectIds);
  }, []);

  useEffect(() => {
    //TODO later, optimization : only fetch tasks in updated Project instead of refetch all
    fetchTasksInSprintProjects(projectIds);
  }, [projectIds]);
  
  return (
    <div>
      {tasks.length > 0 && tasks.map(({ _id, name, gitlabIid, description, assignedTo, weight, projectId }) => (
        <DraggableTaskWrapper taskId={_id} key={_id}>
          <Task
            name={name}
            gitlabIid={gitlabIid}
            description={description}
            assignedTo={assignedTo}
            weight={weight}
            projectId={projectId}
          />
        </DraggableTaskWrapper>
      ))}
    </div>
  );
}

export default TaskList;
