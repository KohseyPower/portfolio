import styled from "styled-components";

export const AppShell = styled.div`
  position: relative;
  min-height: 100svh;
  padding: clamp(14px, 2.2vw, 26px);
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    width: 280px;
    height: 280px;
    top: -120px;
    left: -80px;
    background: rgba(0, 156, 166, 0.22);
  }

  &::after {
    width: 340px;
    height: 340px;
    right: -140px;
    bottom: -160px;
    background: rgba(255, 146, 66, 0.2);
  }
`;

export const AppContent = styled.main`
  position: relative;
  z-index: 1;
  width: min(1120px, 100%);
  margin: 0 auto;
`;
