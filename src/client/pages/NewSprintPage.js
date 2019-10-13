import React, { useState } from 'react';
import {
  Container,
  MenuItem,
  TextField,
  Button, 
  Typography,
} from '@material-ui/core';

import {
  KeyboardDatePicker,
} from '@material-ui/pickers';


function NewSprintPage(props) {
  const [newSprint, updateNewSprint] = useState({
    startDate: null,
    endDate: null,
    name: '',
  });

  function createSprint() {
    const { name, startDate, endDate } = newSprint;
    return fetch('/api/sprints', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, endDate, startDate }),
    })
      .then((data) => data.json())
      .then((data) => { 
        if (data._id) {
          updateNewSprint({});
          props.history.push(`/sprints/${data._id}`);
        }
      });
  }

  function fieldsComplete() {
    const { name, startDate, endDate } = newSprint;
    return name && startDate && endDate;
  }
  
  function setNewMilestoneInfo(value, name) {
    if (newSprint[name] !== value) {
      updateNewSprint({ ...newSprint, [name]: value });
    }
  }

  return (
    <Container maxWidth={'xs'}>
      <Typography variant="h5" component="h2">
        Create a new sprint
      </Typography>
      <form>
        <div>
          <TextField
            id="outlined-select-currency"
            label="Name"
            value={newSprint.name || ''}
            onChange={(e) => setNewMilestoneInfo(e.target.value, 'name')}
            margin="normal"
            fullWidth
          />
          <KeyboardDatePicker
            margin="normal"
            id="start-date-picker"
            label="Start date"
            format="DD MMM YYYY"
            value={newSprint.startDate}
            onChange={(date) => setNewMilestoneInfo(date, 'startDate')}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="start-date-picker"
            label="End date"
            format="D MMM YYYY"
            value={newSprint.endDate}
            onChange={(date) => setNewMilestoneInfo(date, 'endDate')}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </div>
      </form>
      <Button
        variant="contained"
        size="large"
        component="span"
        color="primary"
        disabled={!fieldsComplete()}
        onClick={() => createSprint()}
      >
        Create Sprint
      </Button>
    </Container>
  );
}

export default NewSprintPage;
