
import * as S from "./styles";

import Search from "../../components/Search";
import WeatherData from "../../components/WeatherData";
import ClimateHistory from "../../components/ClimateHistory";

export default function Home() {

  return (
    <S.Container>
      <Search />
      <WeatherData />
      <ClimateHistory />
    </S.Container>
  );
}