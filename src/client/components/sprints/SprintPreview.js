import React from 'react';

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';

function Sprint({ title, onClick}) {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="body1" component="h2">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Sprint;
