import { NavLink } from "react-router";
import styled from "styled-components";

export const Nav = styled.nav`
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 14px;
  border-radius: 22px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.28),
    rgba(255, 255, 255, 0.1)
  );
  border: 1px solid rgba(255, 255, 255, 0.38);
  box-shadow: 0 20px 40px -30px rgba(16, 29, 46, 0.8);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
`;

export const NavList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const NavItem = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 12px;
  color: var(--text-h);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.34);
    box-shadow: 0 14px 18px -16px rgba(17, 24, 39, 0.9);
  }

  &.active {
    color: #032834;
    background: linear-gradient(
      120deg,
      rgba(172, 243, 248, 0.88),
      rgba(107, 235, 233, 0.75)
    );
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    &.active {
      color: #dffcff;
      background: linear-gradient(
        120deg,
        rgba(0, 145, 154, 0.55),
        rgba(0, 111, 130, 0.58)
      );
    }
  }
`;
