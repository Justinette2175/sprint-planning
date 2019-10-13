
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
} from '@material-ui/core';

import ProjectsSelector from '../components/ProjectsSelector';

function SprintPage(props) {
  return (
    <Container maxWidth="lg">
      A sprint page!
      <ProjectsSelector />
    </Container>
  );
}

export default SprintPage;
