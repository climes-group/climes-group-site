import styled from "styled-components";
import Quote from "../components/content/Quote";

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Root>
      <Quote>
        The climate is <em>changing</em>, but our buildings aren't; let's do
        something about it
      </Quote>
    </Root>
  );
}
export default Home;
