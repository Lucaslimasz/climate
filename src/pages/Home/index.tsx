import WeatherData from "../../components/WeatherData";

import Header from "../../components/Header";

import * as S from "./styles";
import Search from "../../components/Search";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Search />
      <WeatherData />
    </S.Container>
  );
}