import Nuvem from "../assets/icons/chuva.webp";
import Sol from "../assets/icons/sol.png";
import Nublado from "../assets/icons/ensolarado.png";
import AlgumasNuvens from "../assets/icons/algumas-nuvens.webp";

export const ImageForTheWeather = (climate: string) => {
  switch(climate){
    case 'céu limpo':
      return  <img src={Sol} alt="" />
    case 'nublado':
      return <img src={Nublado} alt="" />
    case 'algumas nuvens':
      return <img src={AlgumasNuvens} alt="" />
    default:
      return <img src={Nuvem} alt="" />

  }
}