import {
  AppBar,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import {
  ToolBar,
  Container,
  GridContainer,
  Main,
  GridCard,
  GridInputContainer,
  GridSwitchContainer,
  GridCardButton,
} from './styles';

// interface IUpload {
//   nome: string;
//   endereco: string;
//   cep: string;
//   email: string;
//   whatsapp: string;
//   servicosDisponiveis: string;
// }

interface ISortByAlpha {
  ordem: 'Acrescente' | 'Decrescente' | 'Nenhum';
}

const ClinicCreate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sortByAlpha, setSortByAlpha] = useState<ISortByAlpha>();

  return (
    <Container>
      <AppBar position="absolute">
        <ToolBar>
          <Typography variant="h5">Cadastro de Clinica</Typography>
        </ToolBar>
      </AppBar>
      <Main>
        <GridContainer container spacing={2}>
          <form>
            <legend>DADOS</legend>
            <GridInputContainer>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  placeholder="Nome"
                  required
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Endereço"
                  variant="outlined"
                  placeholder="Endereço"
                  required
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  placeholder="CEP"
                  required
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  placeholder="E-mail"
                  required
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="WhatsApp"
                  variant="outlined"
                  placeholder="WhatsApp"
                  required
                />
              </GridCard>
            </GridInputContainer>
            <GridCard item xs={12}>
              <legend>SERVIÇOS</legend>
            </GridCard>
            <GridSwitchContainer>
              <GridCard item xs={12}>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Exames Clínicos"
                  labelPlacement="start"
                />
              </GridCard>
              <GridCard item xs={12}>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Exames Complementares"
                  labelPlacement="start"
                />
              </GridCard>
              <GridCard item xs={12}>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="PPRA"
                  labelPlacement="start"
                />
              </GridCard>
              <GridCard item xs={12}>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="PCMSO"
                  labelPlacement="start"
                />
              </GridCard>
            </GridSwitchContainer>
            <GridCardButton item xs={12}>
              <Button variant="contained">Confirmar</Button>
            </GridCardButton>
          </form>
        </GridContainer>
      </Main>
    </Container>
  );
};

export default ClinicCreate;
