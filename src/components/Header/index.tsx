import DarkModeToggle from "react-dark-mode-toggle";

import * as S from "./styles";

interface HeaderProps {
  isLightTheme: boolean;
  handleTheme: () => void;
}

export default function Header({ isLightTheme, handleTheme }: HeaderProps) {
  return (
    <S.Container>
      <h2>Climate</h2>
      <DarkModeToggle
        onChange={handleTheme}
        checked={isLightTheme}
        size={50}
      />
    </S.Container>
  );
}
