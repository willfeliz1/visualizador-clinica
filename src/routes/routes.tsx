import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClinicViewer from '../pages/ClinicViewer/clinicViewer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ClinicViewer} />
  </Switch>
);

export default Routes;
