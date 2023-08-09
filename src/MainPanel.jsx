import styled from "styled-components";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2em;
  @media (max-width: 767px) {
    padding: 0;
  }

  h1 {
    margin-top: 1.5em;
  }
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 1rem;
  background-color: #345800;
  padding: 0.5em 1em;
  text-align: left;
  max-width: 50%;
  line-height: 2em;
`;

const Container = styled.div`
  margin: 2rem 4rem;
  padding: 2rem;
  min-height: 25vh;

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 767px) {
    padding-top: 0px;
  }
`;

const MainPanel = ({ heading, children }) => {
  return (
    <Root>
      <StyledH1>{heading}</StyledH1>
      <Container>{children}</Container>
    </Root>
  );
};

export default MainPanel;
