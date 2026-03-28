import * as Styled from "./Navbar.styled";

export default function Navbar() {
  return (
    <Styled.Nav>
      <Styled.NavList>
        <Styled.NavItem to="/">Accueil</Styled.NavItem>
        <Styled.NavItem to="/projets">Projets</Styled.NavItem>
      </Styled.NavList>
    </Styled.Nav>
  );
}
