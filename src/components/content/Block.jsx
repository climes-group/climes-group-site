import styled from "styled-components";
import { THEME } from "../../utils";

const Root = styled.div`
  display: block;
  background-color: ${THEME.BKG};
  padding: 2em;
  margin-top: 2em;
  height: ${(props) => props?.height || "auto"};
  width: ${(props) => props?.width || "auto"};
`;

function Block({ children, height, width }) {
  return (
    <Root height={height} width={width}>
      {children}
    </Root>
  );
}

export default Block;
