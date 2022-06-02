import { ChangeEvent, useState } from "react";

import * as S from "./styles";

import SearchIcon from "../../assets/icons/search.svg";

import api from "../../config/api";
import { useMainInformations } from "../../context/MainInformation";

interface ClimateInformations {
  temp: number;
  description: string;
  main: string;
  city: string;
}

export default function Search() {
  const [city, setCity] = useState<string>("");
  const { setInformations } = useMainInformations();

  const searchCityClimate = async () => {
    const { data } = await api.get(
      `weather?q=${city}&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
    );
    const response: ClimateInformations = {
      temp: data.main.temp,
      description: data.weather[0].description,
      main: data.weather[0].main,
      city: data.name,
    };
    setInformations(response);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <S.Container>
      <img src={SearchIcon} alt="Search" />
      <input
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) => handleCity(e)}
        onKeyDown={(e) => e.key === "Enter" && searchCityClimate()}
      />
      <button onClick={searchCityClimate}>Buscar</button>
    </S.Container>
  );
}
