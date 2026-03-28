import * as Styled from "./Navbar.styled";

export default function Navbar() {
  return (
    <Styled.Nav>
      <Styled.NavList>
        <Styled.NavItem to="/">Home</Styled.NavItem>
        <Styled.NavItem to="/projets">Projects</Styled.NavItem>
      </Styled.NavList>
    </Styled.Nav>
  );
}
