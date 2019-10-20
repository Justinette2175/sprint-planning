import React, { useState, useEffect } from 'react';

import {
  Typography,
  CardContent,
  IconButton,
} from '@material-ui/core';

import Member from './Member';

function MemberWithSprintTasks({ memberId, sprintId, name, avatarUrl }) {
  return (
    <Member
      name={name}
      memberId={memberId}
      avatarUrl={avatarUrl}
    />
  );
}


export default MemberWithSprintTasks;
