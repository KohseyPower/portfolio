import * as Styled from "./Home.styled";

export default function Home() {
  return (
    <Styled.Section>
      <Styled.Title>Hi 👋, I'm Kohsey DUFOUR</Styled.Title>
      <Styled.IntroText>
        I'm currently a student at Télécom SudParis and working in parallel as a
        Software Engineer at EKILOG.
      </Styled.IntroText>
      <Styled.Paragraph>
        I'm deeply interested in software design and architecture, not only in
        computing, but as a broader way of thinking about systems and how things
        are built. More generally, I'm passionate about the entire value
        creation chain: from understanding needs and shaping ideas, to
        developing the product, and setting up efficient production and CI
        processes.
      </Styled.Paragraph>
      <Styled.Subtitle>Connect with me</Styled.Subtitle>
      <Styled.SocialLinks>
        <Styled.ContactLink href="mailto:kohsey.dufour@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.5-8 5-8-5V6l8 5 8-5v2.5z" />
          </svg>
          Mail
        </Styled.ContactLink>
        <Styled.ContactLink
          href="https://www.linkedin.com/in/kohsey-dufour/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </Styled.ContactLink>
        <Styled.ContactLink
          href="https://github.com/KohseyPower"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.38-3.88-1.38-.52-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.35.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.29-5.23-5.72 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.63.23 2.83.11 3.13.74.81 1.19 1.84 1.19 3.1 0 4.44-2.68 5.43-5.24 5.71.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.79.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5z" />
          </svg>
          GitHub
        </Styled.ContactLink>
        <Styled.ContactLink
          href="https://x.com/Kohsey_Power"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X (ex. Twitter)
        </Styled.ContactLink>
      </Styled.SocialLinks>
      <Styled.Subtitle>Languages and Tools</Styled.Subtitle>
      <Styled.ToolsText>
        HTML · CSS · JavaScript · TypeScript · Python · React · Django · SPFx ·
        Git · Docker · Linux · Visual Studio Code
      </Styled.ToolsText>
    </Styled.Section>
  );
}
