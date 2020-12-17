import { AppBar, Chip, makeStyles, Typography } from '@material-ui/core';
import { Done, Face, WhatsApp } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
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
} from './styles';

// interface IUpload {
//   nome: string;
//   endereco: string;
//   cep: string;
//   email: string;
//   whatsapp: string;
//   servicosDisponiveis: string;
// }

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const ClinicViewer: React.FC = () => {
  const classes = useStyles();

  const [uploadedFiles, setUploadedFiles] = useState([]);

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
          <Typography variant="h6">Visualizador de Clinicas</Typography>
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
              <ClinicInfo>
                <h2>EHS SOLUÇÕES INTELIGENTES</h2>
                <div>
                  <span>04602-002</span>
                  <span>contato@ehsss.com.br</span>
                </div>
                <AvailableServices>
                  <ChipService
                    icon={<Face />}
                    label="EXAMES CLINICOS"
                    deleteIcon={<Done />}
                  />
                  <ChipService icon={<Face />} label="EXAMES COMPLEMENTARES" />
                  <ChipService icon={<Face />} label="PPRA" color="primary" />
                  <ChipService icon={<Face />} label="PCMSO" color="primary" />
                </AvailableServices>
              </ClinicInfo>

              <WhatsAppContainer>
                <div>
                  <WhatsApp />
                  <span>WhatsApp</span>
                </div>

                <PhoneWhatsApp>
                  <h2>(11) 92477-9755</h2>
                </PhoneWhatsApp>
              </WhatsAppContainer>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
            <ClinicCard>
              <div>
                <h3>NOME DA CLINICA</h3>
              </div>
            </ClinicCard>
          </GridCard>
        </GridContainer>
      </Main>
    </Container>
  );
};

export default ClinicViewer;
