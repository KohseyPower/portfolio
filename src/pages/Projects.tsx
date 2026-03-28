import * as Styled from "./Projects.styled";

export default function Projects() {
  return (
    <Styled.Section>
      <Styled.Title>Mes projets</Styled.Title>
      <Styled.Description>
        Une selection de projets que j&apos;ai construits, avec un focus sur
        l&apos;experience utilisateur et la qualite du code.
      </Styled.Description>
      <Styled.ProjectsGrid>
        <Styled.ProjectCard>
          <Styled.ProjectLink
            href="/app/sort/"
            target="_blank"
            rel="noreferrer"
          >
            <Styled.ProjectLabel>App Sort (React)</Styled.ProjectLabel>
            <Styled.Arrow>→</Styled.Arrow>
          </Styled.ProjectLink>
        </Styled.ProjectCard>
        <Styled.ProjectCard>
          <Styled.ProjectLink
            href="/app/excellent/"
            target="_blank"
            rel="noreferrer"
          >
            <Styled.ProjectLabel>The Excellent Company</Styled.ProjectLabel>
            <Styled.Arrow>→</Styled.Arrow>
          </Styled.ProjectLink>
        </Styled.ProjectCard>
      </Styled.ProjectsGrid>
    </Styled.Section>
  );
}
