import styled from 'styled-components';

import { Button, Card, Chip, Fab, Grid, Toolbar } from '@material-ui/core';

export const Container = styled.div``;

export const ToolBar = styled(Toolbar)`
  display: flex;
  background-color: #9932cc;

  h5 {
    position: relative;
    width: 100%;
    padding-left: 40%;
  }
`;

export const SettingsDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 200px;
  height: 35px;
  margin-right: 10%;
  padding-top: 0.8px;
`;

export const SortAlphabeticalButton = styled(Button)`
  && {
    color: #fff;
    border: 1;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 75px 5px 5px;
`;

export const GridContainer = styled(Grid)`
  height: 100%;
  justify-content: center;
`;

export const GridCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ClinicCard = styled(Card)`
  && {
    display: flex;
    margin: 10px 0 20px;
    min-height: 150px;
    min-width: 1000px;
    border-radius: 9px;
  }
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
  border-radius: 5px;

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
  && {
    background: #3fb563;
    color: #fff;
    font-weight: bolder;

    svg {
      color: #fff;
    }
  }
`;

export const WhatsAppContainer = styled(Button)`
  && {
    display: flex;
    flex: 1;
    width: 200px;
    height: 110px;
    margin: 30px 30px 0 25px;
    padding: 5px 0 0 0;
    background: #49b4e3;
    border-radius: 15px;
    transition: all 0.5s;

    :hover {
      background-color: #49b4d4;
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
  }
`;

export const PhoneWhatsApp = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  padding-top: 5px;
`;

export const AddButton = styled(Fab)`
  && {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0 3% 3% 0;
    background-color: #49b4d4;
    color: #fff;
    width: 64px;
    height: 64px;

    :hover {
      background-color: #3285cc;
    }
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
