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
      <Styled.Paragraph>
        📫 How to reach me:{" "}
        <Styled.ContactLink href="mailto:kohsey.dufour@gmail.com">
          kohsey.dufour@gmail.com
        </Styled.ContactLink>
      </Styled.Paragraph>
      <Styled.Subtitle>Connect with me</Styled.Subtitle>
      <Styled.SocialLinks>
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
        CSS · Django · Docker · .NET · Git · HTML · JavaScript · Linux · Python
        · React · TypeScript · SPFx
      </Styled.ToolsText>
    </Styled.Section>
  );
}
