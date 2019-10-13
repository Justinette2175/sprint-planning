import React, { useEffect, useGlobal, useDispatch } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import SprintsPage from './pages/SprintsPage';
import SprintPage from './pages/SprintPage';

function App() {
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
            path="/sprints/:sprintId"
            render={() => <SprintPage />}
          />
        </Switch>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
