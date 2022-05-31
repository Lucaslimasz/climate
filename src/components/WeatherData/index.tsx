import * as S from "./styles";

import Ensolarado from '../../assets/icons/ensolarado.png';

export default function WeatherData() {
  return (
    <S.Container>
      <img src={Ensolarado} alt="" />
      <div>
        <span>19º</span>
        <p>location</p>
      </div>
    </S.Container>
  );
}
