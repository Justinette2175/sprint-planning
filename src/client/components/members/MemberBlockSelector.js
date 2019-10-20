import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardContent, 
  Box,
} from '@material-ui/core';

import MemberWithBlock from './MemberWithBlock';


function MemberBlockSelector({ sprintId, members }) {
  const [blocksData, updateBlocksData] = useState([]);

  return (
    <Box>
      {members && members.map((member) => (
        <MemberWithBlock
          memberId={member._id}
          name={member.name}
          avatarUrl={member.avatar}
          sprintId={sprintId}
        />
      ))}
    </Box>
  );
}

export default MemberBlockSelector;
