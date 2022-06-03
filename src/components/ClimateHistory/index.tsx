import { useEffect, useState } from "react";
import * as S from "./styles";

import CardClimateHistory from "../CardClimateHistory";
import api from "../../config/api";

interface ClimateInformations {
  temp: number;
  description: string;
  main: string;
  city: string;
}

export default function ClimateHistory() {
  const [infoJoaoPessoa, setInfoJoaoPessoa] = useState<ClimateInformations>();
  const [infoRecife, setInfoRecife] = useState<ClimateInformations>();
  const [infoRioDeJaneiro, setInfoRioDeJaneiro] =
    useState<ClimateInformations>();
  const [infoSaoPaulo, setInfoSaoPaulo] = useState<ClimateInformations>();
  const [infoBrasilia, setInfoBrasilia] = useState<ClimateInformations>();
  const [infoCuritiba, setInfoCuritiba] = useState<ClimateInformations>();

  useEffect(() => {
    (async () => {
      const joaoPessoaResponse = await api.get(
        `weather?q=joao%20pessoa&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const recifeResponse = await api.get(
        `weather?q=recife&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const rioDeJaneiroResponse = await api.get(
        `weather?q=rio%20de%20janeiro&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const saoPauloResponse = await api.get(
        `weather?q=sao%20paulo&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const brasiliaResponse = await api.get(
        `weather?q=brasilia&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const curitibaResponse = await api.get(
        `weather?q=curitiba&appid=4e4c1789138cda089948e551ba82a25d&lang=pt_br&units=metric`
      );
      const joaoPessoaData: ClimateInformations = {
        temp: Math.round(joaoPessoaResponse.data.main.temp),
        description: joaoPessoaResponse.data.weather[0].description,
        main: joaoPessoaResponse.data.weather[0].main,
        city: joaoPessoaResponse.data.name,
      };
      setInfoJoaoPessoa(joaoPessoaData);

      const recifeData: ClimateInformations = {
        temp: Math.round(recifeResponse.data.main.temp),
        description: recifeResponse.data.weather[0].description,
        main: recifeResponse.data.weather[0].main,
        city: recifeResponse.data.name,
      };
      setInfoRecife(recifeData);

      const rioDeJaneiroData: ClimateInformations = {
        temp: Math.round(rioDeJaneiroResponse.data.main.temp),
        description: rioDeJaneiroResponse.data.weather[0].description,
        main: rioDeJaneiroResponse.data.weather[0].main,
        city: rioDeJaneiroResponse.data.name,
      };
      setInfoRioDeJaneiro(rioDeJaneiroData);

      const saoPauloData: ClimateInformations = {
        temp: Math.round(saoPauloResponse.data.main.temp),
        description: saoPauloResponse.data.weather[0].description,
        main: saoPauloResponse.data.weather[0].main,
        city: saoPauloResponse.data.name,
      };
      setInfoSaoPaulo(saoPauloData);

      const brasiliaData: ClimateInformations = {
        temp: Math.round(brasiliaResponse.data.main.temp),
        description: brasiliaResponse.data.weather[0].description,
        main: brasiliaResponse.data.weather[0].main,
        city: brasiliaResponse.data.name,
      };
      setInfoBrasilia(brasiliaData);

      const curitibaData: ClimateInformations = {
        temp: Math.round(curitibaResponse.data.main.temp),
        description: curitibaResponse.data.weather[0].description,
        main: curitibaResponse.data.weather[0].main,
        city: curitibaResponse.data.name,
      };
      setInfoCuritiba(curitibaData);
    })();
  }, []);

  return (
    <S.Container>
      <h2>Lugares Populares</h2>
      <div className="containerCards">
        <CardClimateHistory informations={infoJoaoPessoa} />
        <CardClimateHistory informations={infoRecife} />
        <CardClimateHistory informations={infoRioDeJaneiro} />
        <CardClimateHistory informations={infoSaoPaulo} />
        <CardClimateHistory informations={infoBrasilia} />
        <CardClimateHistory informations={infoCuritiba} />
      </div>
    </S.Container>
  );
}
