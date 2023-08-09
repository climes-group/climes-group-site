import styled from "styled-components";
import { THEME } from "../../utils";

const Root = styled.div`
  background-color: ${THEME.BKG};
  padding: 2em;
  margin-top: 2em;
`;

function Block({ children }) {
  return <Root>{children}</Root>;
}

export default Block;
