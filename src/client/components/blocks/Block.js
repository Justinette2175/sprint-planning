import React, { useState, useEffect } from 'react';

import {
  Chip,
  Avatar,
} from '@material-ui/core';



function Block({ weight, description, _id, onDelete }) {

  const deleteBlock = async (blockId) => {
    try {
      await fetch(`/api/blocks/${blockId}`, {
        method: 'DELETE',
      });
      onDelete(blockId);
    } catch (e) { console.log(e); }
  };

  return (
    <Chip
      key={_id}
      avatar={<Avatar>{weight}</Avatar>}
      label={description}
      onDelete={() => deleteBlock(_id)}
    />
  );
}

export default Block;
