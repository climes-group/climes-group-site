import styled from "styled-components";
import { THEME } from "../../utils";

const Root = styled.div`
  display: block;
  background-color: ${THEME.BKG};
  padding: 0.5em 2em;
  margin: 1em 0em;
  height: ${(props) => props?.height || "auto"};
  width: ${(props) => props?.width || "auto"};
  border-radius: 8px; /*Optional:Rounded*/
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /*Static shadow effect */

  h2 {
    text-align: left;
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
