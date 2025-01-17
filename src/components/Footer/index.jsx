import { Link } from "react-router-dom";
import styled from "styled-components";
import climesUrl from "../../assets/logos/clime_tree_trans.png";
import ContactInfo from "./ContactInfo";

const Root = styled.footer`
  border-top: solid 3px var(--colour-accent);
  min-height: 200px;
  background-color: var(--colour-bkg-2);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const ClimesLogo = styled.div`
  align-self: center;
  margin: 1rem;

  img {
    height: 200px;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const Footer = () => {
  return (
    <Root>
      <FlexContainer>
        <ClimesLogo>
          <Link to={""}>
            <img src={climesUrl} alt="Climes Group Engineering Inc. logo" />
          </Link>
        </ClimesLogo>
        <ContactInfo />
      </FlexContainer>
    </Root>
  );
};

export default Footer;
