import * as Styled from "./Tools.styled.ts";

const tools = [
  {
    name: "BentoPDF",
    href: "/app/bentopdf",
    description: "A tool for PDF conversion.",
  },
  {
    name: "Vertsh",
    href: "/app/vertsh",
    description: "A file conversion tool.",
  },
] as const;

export default function Tools() {
  return (
    <Styled.Section>
      <Styled.Title>Tools</Styled.Title>
      <Styled.Description>
        A selection of useful tools I use and I self host.
      </Styled.Description>
      <Styled.ToolsGrid>
        {tools.map((tool) => (
          <Styled.ToolCard key={tool.name}>
            <Styled.ToolLink href={tool.href} target="_blank" rel="noreferrer">
              <Styled.ToolName>{tool.name}</Styled.ToolName>
              <Styled.ToolText>{tool.description}</Styled.ToolText>
            </Styled.ToolLink>
          </Styled.ToolCard>
        ))}
      </Styled.ToolsGrid>
    </Styled.Section>
  );
}
