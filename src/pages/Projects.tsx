import * as Styled from "./Projects.styled";

const projects = [
  {
    name: "Sort",
    description:
      "A sorting visualizer playground to compare algorithm behavior in real time.",
    appHref: "/app/sort/",
    githubHref: "https://github.com/KohseyPower/sort",
    githubLabel: "Sort GitHub repository",
    isPrivate: false,
  },
  {
    name: "Excel Validator",
    description:
      "Excellent is a django application that allow users to verify complex patterns in their Excel files.",
    appHref: "/app/excellent/",
    githubHref: "https://github.com/4mouskitos/excel-validator",
    githubLabel: "Excellent validator GitHub repository",
    isPrivate: true,
  },
  {
    name: "Budget Tracker",
    description:
      "A budgeting app to track incomes, expenses, and trends with a dashboard.",
    appHref: "/app/anas",
    githubHref: "https://github.com/KohseyPower/budget-tracker",
    githubLabel: "Budget Tracker GitHub repository",
    isPrivate: false,
  },
] as const;

export default function Projects() {
  return (
    <Styled.Section>
      <Styled.Title>My Projects</Styled.Title>
      <Styled.Description>
        A selection of projects I&apos;ve built.
      </Styled.Description>
      <Styled.ProjectsGrid>
        {projects.map((project) => (
          <Styled.ProjectCard key={project.name}>
            <Styled.ProjectLink>
              <Styled.ProjectTop>
                <Styled.ProjectMainLink
                  href={project.appHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Styled.ProjectLabel>{project.name}</Styled.ProjectLabel>
                </Styled.ProjectMainLink>
                <Styled.ProjectRight>
                  {project.isPrivate ? (
                    <Styled.DisabledGithubButtonWraper>
                      <Styled.DisabledGithubButton
                        href={project.githubHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={project.githubLabel}
                        title={project.githubLabel}
                      >
                        <Styled.GithubIcon
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.012-1.23-0.017-2.23-3.338 0.724-4.042-1.416-4.042-1.416-0.546-1.385-1.333-1.754-1.333-1.754-1.089-0.744 0.084-0.729 0.084-0.729 1.205 0.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.303-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.236-3.221-0.123-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23a11.52 11.52 0 0 1 3.006-0.404c1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.241 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.015 2.898-0.015 3.293 0 0.321 0.216 0.694 0.825 0.576 4.765-1.587 8.2-6.082 8.2-11.383 0-6.627-5.373-12-12-12" />
                        </Styled.GithubIcon>
                      </Styled.DisabledGithubButton>
                    </Styled.DisabledGithubButtonWraper>
                  ) : (
                    <Styled.GithubButton
                      href={project.githubHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.githubLabel}
                      title={project.githubLabel}
                    >
                      <Styled.GithubIcon
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.012-1.23-0.017-2.23-3.338 0.724-4.042-1.416-4.042-1.416-0.546-1.385-1.333-1.754-1.333-1.754-1.089-0.744 0.084-0.729 0.084-0.729 1.205 0.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.303-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.236-3.221-0.123-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23a11.52 11.52 0 0 1 3.006-0.404c1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.241 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.015 2.898-0.015 3.293 0 0.321 0.216 0.694 0.825 0.576 4.765-1.587 8.2-6.082 8.2-11.383 0-6.627-5.373-12-12-12" />
                      </Styled.GithubIcon>
                    </Styled.GithubButton>
                  )}
                </Styled.ProjectRight>
              </Styled.ProjectTop>
              <Styled.ProjectDescription>
                {project.description}
              </Styled.ProjectDescription>
            </Styled.ProjectLink>
          </Styled.ProjectCard>
        ))}
      </Styled.ProjectsGrid>
    </Styled.Section>
  );
}
