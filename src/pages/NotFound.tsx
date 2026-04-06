import * as Styled from "./NotFound.styled";

export default function NotFound() {
  return (
    <Styled.Section>
      <Styled.Code>404</Styled.Code>
      <Styled.Message>This page doesn't exist.</Styled.Message>
      <Styled.HomeLink href="/">Go back home</Styled.HomeLink>
    </Styled.Section>
  );
}
