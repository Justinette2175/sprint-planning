import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardContent, 
  Box,
} from '@material-ui/core';

import MemberWithSprintTasks from '../members/MemberWithSprintTasks';
import DragReceivingMemberWrapper from './DragReceivingMemberWrapper';


function MemberList({ sprintId, members, onDropTaskOnMember }) {

  return (
    <Box>
      {members && members.map((member) => (
        <DragReceivingMemberWrapper key={member._id} onDrop={onDropTaskOnMember}>
          <MemberWithSprintTasks
            memberId={member._id}
            name={member.name}
            avatarUrl={member.avatar}
            sprintId={sprintId}
          />
        </DragReceivingMemberWrapper>
      ))}
    </Box>
  );
}

export default MemberList;
