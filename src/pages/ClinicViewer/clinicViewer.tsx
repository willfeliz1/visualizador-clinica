import { AppBar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
import {
  ToolBar,
  Container,
  GridContainer,
  Main,
  UploadContainer,
} from './styles';
import '../../assets/ListaDeClinicas.xlsx';

const ClinicViewer: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <Container>
      <AppBar position="absolute">
        <ToolBar>
          <Typography variant="h6">Visualizador de Clinicas</Typography>
        </ToolBar>
      </AppBar>
      <Main>
        <GridContainer container spacing={1}>
          {!uploadedFiles.length && (
            <UploadContainer>
              <Typography variant="h6">Selecione um arquivo</Typography>
              <input type="file" />
            </UploadContainer>
          )}
        </GridContainer>
      </Main>
    </Container>
  );
};

export default ClinicViewer;
