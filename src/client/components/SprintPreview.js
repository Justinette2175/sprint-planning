import React from 'react';

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';

function Sprint(props) {
  return (
    <Card>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <Typography variant="body1" component="h2">{props.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Sprint;
