import { createContext, ReactNode, useContext, useState } from "react";

interface Informations {
  temp: number;
  description: string;
  main: string;
  city: string;
}

interface MainInformationData {
  informations: Informations;
  setInformations(state: Informations): void;
}

interface MainInformationProviderProps {
  children: ReactNode;
}

export const MainInformation = createContext({} as MainInformationData);

export function MainInformationProvider({
  children,
}: MainInformationProviderProps) {
  const [informations, setInformations] = useState<Informations>(
    {} as Informations
  );

  return (
    <MainInformation.Provider value={{ informations, setInformations }}>
      {children}
    </MainInformation.Provider>
  );
}

export const useMainInformations = () => {
  return useContext(MainInformation);
};
