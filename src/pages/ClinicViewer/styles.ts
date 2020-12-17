import { Button, Card, Chip, Grid, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ToolBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background-color: #9932cc;
`;

export const Main = styled.main`
  flex-grow: 1;

  padding: 75px 5px 5px;
`;

export const GridContainer = styled(Grid)`
  height: 100vh;
  justify-content: center;
`;

export const GridCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
`;

export const ClinicCard = styled(Card)`
  display: flex;
  margin: 10px 0;
  min-height: 150px;
  min-width: 900px;
  padding: 20px 0 0 30px;
  border-radius: 10px;
`;

export const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;

    > span {
      margin: 5px 30px 0 0;
      color: #808080;
    }
  }
`;

export const AvailableServices = styled.div`
  display: flex;
  margin-top: 30px;

  div + div {
    margin-left: 10px;
  }
`;

export const ChipService = styled(Chip)`
  background-color: #3fb563;
  color: #fff;
  font-weight: bolder;

  svg {
    color: #fff;
  }
`;

export const WhatsAppContainer = styled(Button)`
  display: flex;
  flex: 1;
  width: 200px;
  height: 110px;
  margin: 5px 30px 0 25px;
  background-color: #49b4d4;
  border-radius: 15px;

  span {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      color: #fff;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const PhoneWhatsApp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-top: 15px;
  color: #fff;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
