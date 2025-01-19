import styled from "styled-components";

const Root = styled.div`
  display: block;
  background-color: var(--colour-bkg-2);
  padding: 0.5em 2em;
  margin: 2em 0em;
  height: ${(props) => props?.height || "auto"};
  width: ${(props) => props?.width || "auto"};
  border-radius: 8px; /*Optional:Rounded*/
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /*Static shadow effect */

  h2 {
    text-align: left;
  }

  p {
    text-align: left;
    margin-left: 0em;
    margin-bottom: 2rem;
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
