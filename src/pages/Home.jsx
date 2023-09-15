import styled from "styled-components";
import Quote from "../components/content/Quote";

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
`;

const CenteredText = styled.p`
  text-align: center; /* Center-align the text */
`;

function Home() {
  return (
    <Root>
      <Quote fontSize="1.75em">
        <CenteredText>
          <i>The climate is changing; our buildings are not.</i>
        </CenteredText>
        <CenteredText>
          <i>Let's do something about it</i>
        </CenteredText>
      </Quote>
    </Root>
  );
}
export default Home;
