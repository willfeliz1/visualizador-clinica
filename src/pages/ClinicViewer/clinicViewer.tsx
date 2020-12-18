import React, { useCallback, useEffect, useState } from 'react';

import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import {
  Add,
  ArrowDropDown,
  Mood,
  SentimentDissatisfied,
  SortByAlpha,
  WhatsApp,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
import SelectInput from '@material-ui/core/Select/SelectInput';
import database from '../../database/database.json';
import {
  ToolBar,
  Container,
  GridContainer,
  Main,
  UploadContainer,
  GridCard,
  ClinicCard,
  AvailableServices,
  ChipService,
  WhatsAppContainer,
  ClinicInfo,
  PhoneWhatsApp,
  ClinicBorder,
  SettingsDiv,
  SortAlphabeticalButton,
  AddButton,
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

const ClinicViewer: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [sortByAlpha, setSortByAlpha] = useState<string | number>('Nenhum');
  const [clinics, setClinics] = useState<IClinic[]>([]);
  const [orderedClinics, setOrderedClinics] = useState<IClinic[]>([]);

  useEffect(() => {
    setClinics(database.ListaDeClinicas);
    setOrderedClinics(database.ListaDeClinicas);
  }, [clinics]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function compareNumbers(a: any, b: any) {
    return a - b;
  }

  function compare(a: any, b: any) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }

  const handleOrderClinics = useCallback(
    (order: string) => {
      switch (order) {
        case 'Nenhum':
          return setClinics(clinics);

        case 'Crescente':
          return setClinics(clinics.sort(compare));

        case 'Decrescente':
          return setClinics(clinics.reverse());

        default:
          return console.log('teste');
      }
    },
    [clinics],
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortByAlpha(event.target.value as string);
    handleOrderClinics(event.target.value as string);
  };

  const readxls = useCallback(
    file => {
      const fileReader = new FileReader();

      fileReader.readAsArrayBuffer(file);

      fileReader.onload = e => {
        const bufferArray = e.target!.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        console.log(data);

        setUploadedFiles(data);
      };

      console.log(uploadedFiles);
    },
    [uploadedFiles],
  );

  return (
    <Container>
      <AppBar position="absolute">
        <ToolBar>
          <Typography variant="h5">Visualizador de Clinicas</Typography>

          <SettingsDiv>
            <FormControl>
              <SortAlphabeticalButton
                startIcon={<SortByAlpha />}
                endIcon={<ArrowDropDown />}
                onClick={handleOpen}
              >
                <Typography variant="button">{sortByAlpha}</Typography>
              </SortAlphabeticalButton>

              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                value={sortByAlpha}
                style={{ visibility: 'hidden' }}
              >
                <MenuItem value="Nenhum">Nenhum</MenuItem>
                <MenuItem value="Crescente">Crescente</MenuItem>
                <MenuItem value="Decrescente">Decrescente</MenuItem>
              </Select>
            </FormControl>
          </SettingsDiv>
        </ToolBar>
      </AppBar>
      <Main>
        <GridContainer container spacing={1}>
          {/* {!uploadedFiles.length && (
            <UploadContainer>
              <Typography variant="h6">Selecione um arquivo</Typography>
              <input
                type="file"
                onChange={e => {
                  if (e.target.files !== null) {
                    const file = e.target.files[0];
                    readxls(file);
                  }
                }}
              />
            </UploadContainer>
          )} */}
          <GridCard item>
            {clinics.map(clinic => (
              <ClinicCard>
                <ClinicBorder>
                  <span>CLINICA</span>
                </ClinicBorder>

                <ClinicInfo>
                  <h2>{clinic.nome}</h2>
                  <div>
                    <span>{clinic.cep}</span>
                    <span>{clinic.email}</span>
                  </div>
                  <AvailableServices>
                    <ChipService
                      icon={
                        clinic.servicosdisponiveis.examesclinicos ? (
                          <Mood />
                        ) : (
                          <SentimentDissatisfied />
                        )
                      }
                      label="EXAMES CLINICOS"
                      isAllowed={clinic.servicosdisponiveis.examesclinicos}
                    />
                    <ChipService
                      icon={
                        clinic.servicosdisponiveis.examescomplementares ? (
                          <Mood />
                        ) : (
                          <SentimentDissatisfied />
                        )
                      }
                      label="EXAMES COMPLEMENTARES"
                      isAllowed={
                        clinic.servicosdisponiveis.examescomplementares
                      }
                    />
                    <ChipService
                      icon={
                        clinic.servicosdisponiveis.ppra ? (
                          <Mood />
                        ) : (
                          <SentimentDissatisfied />
                        )
                      }
                      label="PPRA"
                      isAllowed={clinic.servicosdisponiveis.ppra}
                    />
                    <ChipService
                      icon={
                        clinic.servicosdisponiveis.pcmso ? (
                          <Mood />
                        ) : (
                          <SentimentDissatisfied />
                        )
                      }
                      label="PCMSO"
                      isAllowed={clinic.servicosdisponiveis.pcmso}
                    />
                  </AvailableServices>
                </ClinicInfo>

                <WhatsAppContainer>
                  <div>
                    <WhatsApp />
                    <span>WhatsApp</span>
                  </div>
                  <PhoneWhatsApp>
                    <h1>{clinic.whatsapp}</h1>
                  </PhoneWhatsApp>
                </WhatsAppContainer>
              </ClinicCard>
            ))}
          </GridCard>
        </GridContainer>

        <Link to="/clinic/create">
          <AddButton>
            <Add />
          </AddButton>
        </Link>
      </Main>
    </Container>
  );
};

export default ClinicViewer;
