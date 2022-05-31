import * as S from "./styles";

import Ensolarado from "../../assets/icons/ensolarado.png";
import Location from "../../assets/icons/location.svg";

export default function WeatherData() {
  return (
    <S.Container>
      <img src={Ensolarado} alt="" />
      <div>
        <span>19º</span>
        <div>
          <img src={Location} alt="" />
          <p>João Pessoa</p>
        </div>
      </div>
    </S.Container>
  );
}
