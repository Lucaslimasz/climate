import * as S from "./styles";

import CardClimateHistory from "../CardClimateHistory";

export default function ClimateHistory() {
  return (
    <S.Container>
      <h2>Lugares Populares</h2>
      <div className="containerCards">
        <CardClimateHistory />
        <CardClimateHistory />
        <CardClimateHistory />
        <CardClimateHistory />
        <CardClimateHistory />
        <CardClimateHistory />
      </div>
    </S.Container>
  );
}
