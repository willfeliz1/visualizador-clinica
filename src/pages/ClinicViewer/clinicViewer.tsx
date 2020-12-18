import { AppBar, Typography } from '@material-ui/core';
import {
  Add,
  ArrowDropDown,
  Mood,
  SortByAlpha,
  WhatsApp,
} from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
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

const ClinicViewer: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [sortByAlpha, setSortByAlpha] = useState<ISortByAlpha>();

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
            <SortAlphabeticalButton
              startIcon={<SortByAlpha />}
              endIcon={<ArrowDropDown />}
            >
              <Typography variant="button">Ordenar</Typography>
            </SortAlphabeticalButton>
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
            <ClinicCard>
              <ClinicBorder>
                <span>CLINICA</span>
              </ClinicBorder>

              <ClinicInfo>
                <h2>EHS SOLUÇÕES INTELIGENTES</h2>
                <div>
                  <span>04602-002</span>
                  <span>contato@ehsss.com.br</span>
                </div>
                <AvailableServices>
                  <ChipService icon={<Mood />} label="EXAMES CLINICOS" />
                  <ChipService icon={<Mood />} label="EXAMES COMPLEMENTARES" />
                  <ChipService icon={<Mood />} label="PPRA" />
                  <ChipService icon={<Mood />} label="PCMSO" />
                </AvailableServices>
              </ClinicInfo>

              <WhatsAppContainer>
                <div>
                  <WhatsApp />
                  <span>WhatsApp</span>
                </div>
                <PhoneWhatsApp>
                  <h1>(11) 91477-9755</h1>
                </PhoneWhatsApp>
              </WhatsAppContainer>
            </ClinicCard>
            <ClinicCard>
              <ClinicBorder>
                <span>CLINICA</span>
              </ClinicBorder>

              <ClinicInfo>
                <h2>EHS SOLUÇÕES INTELIGENTES</h2>
                <div>
                  <span>04602-002</span>
                  <span>contato@ehsss.com.br</span>
                </div>
                <AvailableServices>
                  <ChipService icon={<Mood />} label="EXAMES CLINICOS" />
                  <ChipService icon={<Mood />} label="EXAMES COMPLEMENTARES" />
                  <ChipService icon={<Mood />} label="PPRA" />
                  <ChipService icon={<Mood />} label="PCMSO" />
                </AvailableServices>
              </ClinicInfo>

              <WhatsAppContainer>
                <div>
                  <WhatsApp />
                  <span>WhatsApp</span>
                </div>
                <PhoneWhatsApp>
                  <h1>(11) 91477-9755</h1>
                </PhoneWhatsApp>
              </WhatsAppContainer>
            </ClinicCard>
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
