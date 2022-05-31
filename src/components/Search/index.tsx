import * as S from "./styles";

import SearchIcon from '../../assets/icons/search.svg';

export default function Search() {
  return (
    <S.Container>
      <img src={SearchIcon} alt="Search" />
      <input placeholder="Digite uma cidade"/>
      <button>Buscar</button>
    </S.Container>
  );
}