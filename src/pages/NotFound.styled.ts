import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  margin: 18px auto 0;
  padding: clamp(20px, 4vw, 44px);
  width: min(920px, 100%);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.29),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0 28px 42px -34px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(18px) saturate(145%);
  -webkit-backdrop-filter: blur(18px) saturate(145%);
  text-align: left;

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.22);
    background: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.06)
    );
    box-shadow: 0 26px 36px -30px rgba(0, 0, 0, 0.85);
  }
`;

export const Code = styled.p`
  margin: 0;
  font-size: clamp(2.1rem, 5.3vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const Message = styled.p`
  margin-top: 14px;
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.55;
  color: var(--text-h);
`;

export const HomeLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 28px;
  padding: 9px 13px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.34),
    rgba(255, 255, 255, 0.12)
  );
  color: #045d87;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 24px -22px rgba(15, 23, 42, 0.9);
    color: #0a7fb5;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.14);
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.04)
    );
    color: #86d8ff;

    &:hover {
      color: #b2e9ff;
    }
  }
`;
