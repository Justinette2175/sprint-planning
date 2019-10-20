import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  Card,
  CardHeader,
  CardContent,
  Grid
} from '@material-ui/core';

import TaskList from './TaskList';
import MemberList from './MemberList';
import DragReceivingTaskListWrapper from './DragReceivingTaskListWrapper';

function TaskAssigner({ sprintId, projects, members }) {

  const handleDropTaskOnMember = () => {
    console.log('dropped task on a member');
  }; 

  const handleDropTaskOnTaskList = () => {
    console.log('dropped task on task list');
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={6}>
          {
            projects && projects.length > 0 && (
              <DragReceivingTaskListWrapper onDrop={handleDropTaskOnTaskList}>
                <TaskList
                  projectIds={projects}
                />
              </DragReceivingTaskListWrapper>
            )
          }
        </Grid>
        <Grid item xs={6}>
          <MemberList
            onDropTaskOnMember={handleDropTaskOnMember}
            sprintId={sprintId}
            members={members}
          />
        </Grid>
      </Grid>
    </DndProvider>
  );
}

// {assignedTo && Array.isArray(assignedTo) && assignedTo.map((memberId) => <MemberAvatar key={memberId} memberId={memberId} />)}

export default TaskAssigner;
