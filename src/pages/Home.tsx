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
          LinkedIn
        </Styled.ContactLink>
        <Styled.ContactLink
          href="https://x.com/Kohsey_Power"
          target="_blank"
          rel="noreferrer"
        >
          X (ex.twitter)
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
