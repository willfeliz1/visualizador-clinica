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
  min-width: 1000px;
  border-radius: 10px;
`;

export const ClinicBorder = styled.div`
  display: flex;
  background: #00ced1;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 27px;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  border-radius: 10px;

  span {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
`;

export const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0 0 0;

  h2 {
    font-weight: 600;
  }

  > div {
    display: flex;

    > span {
      margin: 6px 30px 0 0;
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
  background-color: #49b4d4;
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
  margin: 30px 30px 0 25px;
  padding: 5px 0 0 0;
  background-color: #169632;
  border-radius: 15px;
  transition: all 0.5s;

  :hover {
    background-color: #3fb563;
    padding-right: 30px;
    transition: 0.5s;
  }

  span {
    display: flex;
    flex-direction: column;
    transition: 0.5s;

    > div {
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
  flex-direction: row;
  color: #fff;
  padding-top: 5px;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
