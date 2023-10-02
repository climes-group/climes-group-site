import styled from "styled-components";
import { THEME } from "../../utils";

const Root = styled.div`
  display: block;
  background-color: ${THEME.BKG};
  padding: 0.5em 2em;

  margin: 1em 0em;
  height: ${(props) => props?.height || "auto"};
  width: ${(props) => props?.width || "auto"};

  h2 {
    display: inline-block;
    border-bottom: 0.5rem solid ${THEME.ACCENT};
  }

  h3 {
    display: inline-block;
    border-bottom: 0.3rem solid ${THEME.ACCENT};
  }

  p {
    text-align: left;
    color: ${THEME.SECACCENT};
    margin-left: 0em;
  }
`;

function Block({ children, height, width }) {
  return (
    <Root height={height} width={width}>
      {children}
    </Root>
  );
}

export default Block;
