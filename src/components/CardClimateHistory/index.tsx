import * as S from "./styles";

import { ImageForTheWeather } from "../../utils/imageForTheWeather";

interface Informations {
  temp: number;
  description: string;
  main: string;
  city: string;
}

interface WeatherDataProps {
  informations?: Informations;
}

export default function CardClimateHistory({ informations }: WeatherDataProps) {
  return (
    <S.Container>
      <div className="informations">
        <div>
          <span>{informations?.temp || 0}º</span>
          <strong>C</strong>
        </div>
        <b>{informations?.city || "city"}</b>
        <p>{informations?.description || "status"}</p>
      </div>

      {ImageForTheWeather(`${informations?.description}`)}
    </S.Container>
  );
}
