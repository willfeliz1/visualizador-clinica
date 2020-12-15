import { AppBar, Typography } from '@material-ui/core';
import React from 'react';
import { ToolBar } from './styles';

const ClinicViewer: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6">Visualizador de Clinicas</Typography>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default ClinicViewer;
