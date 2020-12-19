import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClinicCreate from '../pages/ClinicCreate/clinicCreate';
import ClinicViewer from '../pages/ClinicViewer/clinicViewer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ClinicViewer} />
    <Route path="/clinic/create" component={ClinicCreate} />
  </Switch>
);

export default Routes;
