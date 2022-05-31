import Sun from '../../assets/icons/sun.svg'

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <h2>João Pessoa</h2>
      <img src={Sun} alt="theme" />
    </S.Container>
  );
}
