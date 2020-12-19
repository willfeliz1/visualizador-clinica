import styled from 'styled-components';

import { Button, Card, Chip, Fab, Grid, Toolbar } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
`;

export const ToolBar = styled(Toolbar)`
  display: flex;
  background-color: #9932cc;

  h5 {
    position: relative;
    width: 100%;
    padding-left: 45%;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 75px;
`;

export const GridContainer = styled(Grid)`
  display: flex;
  flex: 1;
  height: 100vh;

  legend {
    font-size: 32px;
    line-height: 34px;
    color: #49b4e3;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  form {
    width: 700px;
    margin: 64px auto;
    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    padding: 64px 80px;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export const GridInputContainer = styled(Grid)`
  padding-bottom: 50px;
`;

export const GridSwitchContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-top: -30px;

  label {
    align-items: center;
    margin-right: auto;
  }
`;

export const GridCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

export const GridCardButton = styled(Grid)`
  && {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 80px 0 0 0;

    button {
      width: 280px;
      height: 55px;
      background-color: #4981e3;
      color: #fff;
      border-radius: 30px;

      :hover {
        background-color: #49a9e3;
      }
    }
  }
`;
