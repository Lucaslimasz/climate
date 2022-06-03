import * as S from "./styles";

import Location from "../../assets/icons/location.svg";
import { ImageForTheWeather } from "../../utils/imageForTheWeather";

interface Informations {
  temp: number;
  description: string;
  main: string;
  city: string;
}

interface WeatherDataProps {
  informations: Informations;
}

export default function WeatherData({ informations }: WeatherDataProps) {
  return (
    <S.Container>
      {ImageForTheWeather(`${informations?.description}`)}
      <div>
        <span>{Math.round(informations?.temp) || 0}º</span>
        <div>
          <img src={Location} alt="" />
          <p>{informations?.city || 'Cidade'}</p>
        </div>
        <p>{informations?.description || 'Status'}</p>
      </div>
    </S.Container>
  );
}
