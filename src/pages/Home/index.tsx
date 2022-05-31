import Header from '../../components/Header';
import WeatherData from '../../components/WeatherData';

import * as S from './styles';

export default function Home(){
  return (
    <S.Container>
      <Header />
      <WeatherData />
    </S.Container>
  )
}