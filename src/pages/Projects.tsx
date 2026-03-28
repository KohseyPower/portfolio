import * as Styled from "./Projects.styled";

export default function Projects() {
  return (
    <Styled.Section>
      <Styled.Title>My Projects</Styled.Title>
      <Styled.Description>
        A selection of projects I&apos;ve built.
      </Styled.Description>
      <Styled.ProjectsGrid>
        <Styled.ProjectCard>
          <Styled.ProjectLink
            href="/app/sort/"
            target="_blank"
            rel="noreferrer"
          >
            <Styled.ProjectLabel>Sort</Styled.ProjectLabel>
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
