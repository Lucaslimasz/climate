
import * as S from "./styles";

import Search from "../../components/Search";
import WeatherData from "../../components/WeatherData";
import ClimateHistory from "../../components/ClimateHistory";
import { useMainInformations } from "../../context/MainInformation";

export default function Home() {

  const {informations} = useMainInformations();

  return (
    <S.Container>
      <Search />
      <WeatherData informations={informations}/>
      <ClimateHistory />
    </S.Container>
  );
}