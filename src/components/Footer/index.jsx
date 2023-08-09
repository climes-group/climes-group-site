import styled from "styled-components";
import peoImgUrl from "../../assets/logo-peo-en.png";
import climesUrl from "../../assets/climes.jpg";
import { THEME } from "../../utils";
import Social from "./Social";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

const Root = styled.footer`
  border-top: solid 6px ${THEME.ACCENT};
  min-height: 200px;
  background-color: ${THEME.BKG};
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const PeoLogoContainer = styled.div`
  img {
    width: 250px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 1px solid #224352;
    align-items: center;
  }
`;

const Auth = styled.div`
  max-width: 300px;
  margin: 2rem;
  font-size: 0.8rem;
  text-align: left;
`;

const ClimesLogo = styled.div`
  align-self: center;
  margin: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <Root>
      <PeoLogoContainer>
        <a href="https://www.peo.on.ca/">
          <img src={peoImgUrl} alt="PEO Logo Image" />
        </a>
        <Auth>
          Authorized by the Association of Professional Engineers of Ontario to
          offer professional engineering services.
        </Auth>
      </PeoLogoContainer>
      <FlexContainer>
        <ContactInfo />
        <Social />
        <ClimesLogo>
          <Link to={""}>
            <img src={climesUrl} alt="Climes Group Engineering Inc. logo" />
          </Link>
        </ClimesLogo>
      </FlexContainer>
    </Root>
  );
};

export default Footer;
