import styled from "styled-components";

export const Section = styled.section`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  margin-top: 40px;
  font-size: 1.5rem;
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  line-height: 1.6;
`;

export const IntroText = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export const ContactLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ToolsText = styled.p`
  line-height: 1.8;
`;
