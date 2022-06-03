
import * as S from "./styles";

import Search from "../../components/Search";
import WeatherData from "../../components/WeatherData";
import ClimateHistory from "../../components/ClimateHistory";
import { useMainInformations } from "../../context/MainInformation";
import Footer from "../../components/Footer";

export default function Home() {

  const {informations} = useMainInformations();

  return (
    <S.Container>
      <Search />
      <WeatherData informations={informations}/>
      <ClimateHistory />
      <Footer />
    </S.Container>
  );
}