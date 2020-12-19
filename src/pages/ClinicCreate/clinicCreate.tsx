/* eslint-disable prettier/prettier */
import {
  AppBar,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import database from '../../database/database.json';
import { ClinicContext } from '../../Hooks/ClinicContext';
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

interface IClinic {
  nome: string;
  endereco: string;
  cep: string;
  email?: string;
  whatsapp: string;
  servicosdisponiveis: {
    examesclinicos: boolean;
    examescomplementares: boolean;
    ppra: boolean;
    pcmso: boolean;
  };
}

const ClinicCreate: React.FC = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [examesclinicos, setExamesclinicos] = useState(false);
  const [examescomplementares, setExamescomplementares] = useState(false);
  const [ppra, setPpra] = useState(false);
  const [pcmso, setPcmso] = useState(false);

  const { clinicsStorage, setClinicsStorage } = useContext(ClinicContext);

  const history = useHistory();

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    const newClinic = {
      "nome": nome,
      "endereco": endereco,
      "cep": cep,
      "email": email,
      "whatsapp": whatsapp,
      "servicosdisponiveis": {
        "examesclinicos": examesclinicos,
        "examescomplementares": examescomplementares,
        "ppra": ppra,
        "pcmso": pcmso,
      }    
    }

    clinicsStorage.push(newClinic);

    setClinicsStorage(clinicsStorage);

    alert("Cadastro realizado!");

    history.push('/');

  },[nome, endereco, cep, email, whatsapp, examesclinicos, examescomplementares, ppra, pcmso, clinicsStorage, history, setClinicsStorage]);

  return (
    <Container>
      <AppBar position="absolute">
        <ToolBar>
          <Typography variant="h5">Cadastro de Clinica</Typography>
        </ToolBar>
      </AppBar>
      <Main>
        <GridContainer container spacing={2}>
          <form onSubmit={handleSubmit}>
            <legend>DADOS</legend>
            <GridInputContainer>
              <GridCard item xs={12}>
                <TextField
                  label="Nome"
                  variant="outlined"
                  required
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Endereço"
                  variant="outlined"
                  required
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  required
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </GridCard>
              <GridCard item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="WhatsApp"
                  variant="outlined"
                  required
                  value={whatsapp}
                  onChange={e => setWhatsApp(e.target.value)}
                />
              </GridCard>
            </GridInputContainer>
            <GridCard item xs={12}>
              <legend>SERVIÇOS</legend>
            </GridCard>
            <GridSwitchContainer>
              <FormGroup>
                <GridCard item xs={12}>
                  <FormControlLabel
                    value={examesclinicos}
                    control={(
                      <Switch
                        color="primary"
                        value={examesclinicos}
                        onChange={() => setExamesclinicos(!examesclinicos)}
                      />
                    )}
                    label="Exames Clínicos"
                  />
                </GridCard>
                <GridCard item xs={12}>
                  <FormControlLabel
                    value={examescomplementares}
                    control={(
                      <Switch 
                        color="primary" 
                        value={examescomplementares}
                        onChange={() => setExamescomplementares(!examescomplementares)}
                      />
                    )}
                    label="Exames Complementares"
                  />
                </GridCard>
                <GridCard item xs={12}>
                  <FormControlLabel
                    value={ppra}
                    control={(
                      <Switch 
                        color="primary" 
                        value={ppra}
                        onChange={() => setPpra(!ppra)}
                      />
                    )}
                    label="PPRA"
                  />
                </GridCard>
                <GridCard item xs={12}>
                  <FormControlLabel
                    value={pcmso}
                    control={(
                      <Switch 
                        color="primary" 
                        value={pcmso}
                        onChange={() => setPcmso(!pcmso)}
                      />
                    )}
                    label="pcmso"
                  />
                </GridCard>
              </FormGroup>
            </GridSwitchContainer>
            <GridCardButton item xs={12}>
              <Button variant="contained" type="submit">
                Confirmar
              </Button>  
            </GridCardButton>           
          </form>
        </GridContainer>
      </Main>
    </Container>
  );
};

export default ClinicCreate;
