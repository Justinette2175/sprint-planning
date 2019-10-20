import React, { useState } from 'react';

import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from '@material-ui/core';

function NewBlockDialog({ memberId, sprintId, onClose, onCreateBlock}) {

  const [inputValues, updateInputValues] = useState({
    weight: 0,
    description: '',
  });

  function handleChange(e, key) {
    const value = Number(e.target.value) || e.target.value;
    const newInputValues = Object.assign({}, inputValues, {
      [key]: value,
    });
    updateInputValues(newInputValues);
  }

  const createBlock = async () => {
    const { description, weight } = inputValues;
    try {
      const newBlock = await fetch('/api/blocks', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, sprintId, memberId, weight }),
      });
      const jsonBlock = await newBlock.json();
      onCreateBlock(jsonBlock);
      onClose();
      updateInputValues({
        weight: 0,
        description: '',
      });
    } catch (e) { console.log(e); }
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open>
      <DialogTitle>New time block</DialogTitle>
      <TextField
        id="weight-selector"
        label="Weight"
        value={inputValues.weight}
        onChange={(e) => handleChange(e, 'weight')}
        type="number"
        margin="normal"
      />
      <TextField
        id="desciption-selector"
        label="Description"
        value={inputValues.desciption}
        onChange={(e) => handleChange(e, 'description')}
        margin="normal"
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={createBlock}
      >
        Save Block
      </Button>
    </Dialog>
  );
}

export default NewBlockDialog;
