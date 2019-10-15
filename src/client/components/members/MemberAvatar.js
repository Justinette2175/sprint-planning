import React from 'react';

import {
  Avatar,
  Tooltip,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function MemberAvatar({ url, name, size}) {
  const classes = useStyles();
  return (
    <Tooltip placement="top" title={name}>
      {url && <Avatar className={`${classes.avatar} ${size === 'large' && classes.bigAvatar}`} src={url} />}
    </Tooltip>
  );
}

export default MemberAvatar;
