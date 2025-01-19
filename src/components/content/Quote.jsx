import styled from "styled-components";

const StyledQuote = styled.blockquote`
  text-indent: 1em;
  border-left: ${(props) =>
    props.fontSize
      ? `calc(${props.fontSize} / 4) solid var(--colour-accent)`
      : "calc(1em / 4) solid var(--colour-accent)"};
  font-size: ${(props) => props.fontSize || "2em"};
  font-weight: 700;
  padding: 2rem 0;
  margin: 5rem 0;
  @supports (hanging-punctuation: first) {
    & {
      text-indent: 0;
      hanging-punctuation: first;
    }
  }

  @media (max-width: 767px) {
    margin: 0.5em;
    p {
      margin-left: 0.5em;
      font-size: 1em;
    }
  }
`;

export default function Quote({ children, fontSize }) {
  return <StyledQuote fontSize={fontSize}>{children}</StyledQuote>;
}
