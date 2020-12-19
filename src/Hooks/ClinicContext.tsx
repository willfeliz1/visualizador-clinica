import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import database from '../database/database.json';

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

export const ClinicContext = createContext(null);

export default ({ children }: any) => {
  const [clinics, setClinics] = useState<IClinic[]>([]);

  useEffect(() => {
    setClinics(database.ListaDeClinicas);
  }, [clinics]);

  const store = {
    clinicsStorage: clinics,
    setClinicsStorage: setClinics,
  };

  return (
    <ClinicContext.Provider value={store}>{children}</ClinicContext.Provider>
  );
};
