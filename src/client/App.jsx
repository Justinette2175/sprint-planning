import React, { useEffect, useGlobal, useDispatch } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import SprintsPage from './components/pages/SprintsPage';
import SprintPage from './components/pages/SprintPage';
import NewSprintPage from './components/pages/NewSprintPage';

function App(props) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SprintsPage />}
          />
          <Route
            exact
            path="/sprints/new"
            render={() => <NewSprintPage />}
          />
          <Route
            path="/sprints/:sprintId"
            render={() => <SprintPage />}
          />
        </Switch>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
