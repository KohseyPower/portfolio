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
  font-size: clamp(2.1rem, 5.3vw, 3.25rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const Subtitle = styled.h2`
  margin: 32px 0 0;
  font-size: clamp(1.2rem, 2.1vw, 1.45rem);
`;

export const Paragraph = styled.p`
  margin-top: 16px;
  line-height: 1.6;
  color: var(--text);
`;

export const IntroText = styled.p`
  margin-top: 14px;
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.55;
  color: var(--text-h);
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #045d87;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0a7fb5;
  }

  @media (prefers-color-scheme: dark) {
    color: #86d8ff;

    &:hover {
      color: #b2e9ff;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;

  ${ContactLink} {
    padding: 9px 13px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.38);
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.34),
      rgba(255, 255, 255, 0.12)
    );
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 24px -22px rgba(15, 23, 42, 0.9);
    }

    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.14);
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.09),
        rgba(255, 255, 255, 0.04)
      );
    }
  }
`;

export const ToolsText = styled.p`
  margin-top: 12px;
  line-height: 1.7;
  color: var(--text-h);
  font-weight: 500;
`;
