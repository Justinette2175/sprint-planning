import React, { useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

import MemberAvatar from '../members/MemberAvatar';

function Task({ name, gitlabIid, description, assignedTo, weight, projectId }) {
  return (
    <Card>
      <CardHeader
        title={`${gitlabIid} - ${name}`}
      />
      <CardContent>

      </CardContent>
    </Card>
  );
}

// {assignedTo && Array.isArray(assignedTo) && assignedTo.map((memberId) => <MemberAvatar key={memberId} memberId={memberId} />)}

export default Task;
