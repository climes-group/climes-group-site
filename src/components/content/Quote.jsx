import styled from "styled-components";
import { THEME } from "../../utils";

const StyledQuote = styled.blockquote`
  text-indent: 1em;
  border-left: 40px solid ${THEME.PRIMARY};
  font-size: 2em;
  font-weight: 700;
  @supports (hanging-punctuation: first) {
    & {
      text-indent: 0;
      hanging-punctuation: first;
    }
  }
`;

export default function Quote({ children }) {
  return <StyledQuote>{children}</StyledQuote>;
}
