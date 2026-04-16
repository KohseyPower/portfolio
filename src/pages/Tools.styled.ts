import styled from "styled-components";

export const Section = styled.section`
  width: min(920px, 100%);
  margin: 18px auto 0;
  padding: clamp(20px, 4vw, 44px);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.29),
    rgba(255, 255, 255, 0.11)
  );
  box-shadow: 0 26px 40px -34px rgba(17, 24, 39, 0.92);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  text-align: left;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3.6vw, 2.7rem);
  letter-spacing: -0.03em;
`;

export const Description = styled.p`
  margin-top: 12px;
  color: var(--text);
`;

export const ToolsGrid = styled.ul`
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

export const ToolCard = styled.li`
  border-radius: 18px;

  &:nth-child(1) {
    background: linear-gradient(
      125deg,
      rgba(99, 196, 184, 0.28),
      rgba(13, 148, 136, 0.14)
    );
  }

  &:nth-child(2) {
    background: linear-gradient(
      125deg,
      rgba(255, 184, 108, 0.3),
      rgba(249, 115, 22, 0.14)
    );
  }
`;

export const ToolLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  min-height: 220px;
  padding: 20px;
  border-radius: 18px;
  text-decoration: none;
  color: var(--text-h);
  border: 1px solid rgba(255, 255, 255, 0.52);
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 30px -26px rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.76);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.24);
  }
`;

export const ToolName = styled.h2`
  margin: 0;
  font-size: clamp(1.4rem, 2.8vw, 1.9rem);
  letter-spacing: -0.02em;
`;

export const ToolText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: var(--text);
`;
