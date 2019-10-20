import React, { useState, useEffect } from 'react';

import {
  Typography,
  CardContent,
  IconButton,
} from '@material-ui/core';

import Member from './Member';
import Block from '../blocks/Block';
import NewBlockDialog from '../blocks/NewBlockDialog';

function MemberBlockSelector({ memberId, sprintId, name, avatarUrl }) {
  const [blocksData, updateBlocksData] = useState([]);
  const [creatingBlock, updateCreatingBlock] = useState(false);

  useEffect(() => {
    if (memberId && sprintId) {
      const getBlocksData = () => {
        fetch(`/api/blocks?sprintId=${sprintId}&memberId=${memberId}`)
          .then((data) => data.json())
          .then((data) => {
            updateBlocksData(data || []);
          });
      };
      getBlocksData();
    }
  }, []);

  const handleCreateBlock = (newBlock) => {
    updateBlocksData([...blocksData, newBlock]);
  };

  const handleDeleteBlock = (_id) => {
    const newBlocks = blocksData.filter((block) => {
      return block._id !== _id;
    });
    updateBlocksData(newBlocks);
  }

  return (
    <Member
      name={name}
      memberId={memberId}
      avatarUrl={avatarUrl}
    >
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Time blocks for the sprint
        </Typography>
        {blocksData.map(({ description, weight, _id }) => (
          <Block
            key={_id}
            _id={_id}
            weight={weight}
            description={description}
            onDelete={handleDeleteBlock}
          />
        ))}
        <IconButton aria-label="add" size="small" onClick={() => updateCreatingBlock(true)}>
          +
        </IconButton>
      </CardContent>
      {creatingBlock && (
        <NewBlockDialog
          memberId={memberId}
          sprintId={sprintId}
          onClose={() => updateCreatingBlock(false)}
          onCreateBlock={handleCreateBlock}
        />
      )}
    </Member>
  );
}


export default MemberBlockSelector;
