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

export const ProjectsGrid = styled.ul`
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
  display: grid;
  gap: 14px;
`;

export const ProjectLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 18px;
  text-decoration: none;
  color: var(--text-h);
  border: 1px solid rgba(255, 255, 255, 0.52);
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.34),
    rgba(255, 255, 255, 0.1)
  );
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.26);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 30px -26px rgba(15, 23, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.76);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.24);

    &::after {
      border-color: rgba(255, 255, 255, 0.12);
    }
  }
`;

export const ProjectMainLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
  color: var(--text-h);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
`;

export const ProjectRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const ProjectCard = styled.li`
  border-radius: 18px;

  &:nth-child(1) ${ProjectLink} {
    background: linear-gradient(
      125deg,
      rgba(193, 122, 210, 0.42),
      rgba(135, 10, 212, 0.18)
    );
  }

  &:nth-child(2) ${ProjectLink} {
    background: linear-gradient(
      125deg,
      rgba(177, 211, 5, 0.42),
      rgba(17, 176, 14, 0.18)
    );
  }
`;

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.42),
    rgba(255, 255, 255, 0.14)
  );
  color: var(--text-h);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 22px -20px rgba(15, 23, 42, 0.9);
    border-color: rgba(255, 255, 255, 0.74);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.24);
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.06)
    );
  }
`;

export const DisabledGithubButtonWraper = styled.div`
  cursor: no-drop;
  display: inline-block;
`;

export const DisabledGithubButton = styled(GithubButton)`
  pointer-events: auto;
  cursor: not-allowed;
  background-color: #442020;

  &:active {
    pointer-events: none;
  }

  &:hover::after {
    content: "Private repository - Access restricted";
    position: absolute;
    bottom: 100%;
    left: -20%;
    background-color: #1a1a1a;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #555;
  }
`;

export const GithubIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ProjectLabel = styled.span`
  font-weight: 600;
`;
