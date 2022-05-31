import * as S from "./styles";

import Nuvem from "../../assets/icons/chuva.webp";
import Sol from "../../assets/icons/sol.png";
import Ensolarado from "../../assets/icons/ensolarado.png";

export default function CardClimateHistory() {
  return (
    <S.Container>
      <div className="informations">
        <div>
          <span>18º</span>
          <strong>C</strong>
        </div>
        <b>João Pessoa</b>
        <p>Pancadas de chuva</p>
      </div>

      <img src={Nuvem} alt="" />
    </S.Container>
  );
}
