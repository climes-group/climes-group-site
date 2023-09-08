import { Link } from "react-router-dom";
import styled from "styled-components";
import climesBannerUrl from "../../assets/logos/climes_group_engineering_high.jpg";
import { PAGES, THEME } from "../../utils";

const ClimesBanner = styled.div`
  text-align: left;
  padding: 1em 0em;
  img {
    height: 100px;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
const ClimesLogoMobile = styled.div`
  text-align: left;
  img {
    height: 100px;
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

const Root = styled.div`
  padding-left: 2rem;
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuOl = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  border-bottom: solid 3px ${THEME.ACCENT};
  margin-bottom: 0px;
  margin-top: 0em;
  padding-left: 0px;
  z-index: 1;
`;

const MenuLi = styled.li`
  padding: 1rem;
  padding-left: 2rem;
  background-clip: content-box, padding-box;
  list-style-type: none;
  line-height: 1.5;
  padding-bottom: 0;

  & :hover {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: ${THEME.PRIMARY};
  }
`;

const Header = ({ selected }) => {
  return (
    <>
      <Root>
        <ClimesBanner>
          <Link to="/">
            <img src={climesBannerUrl} alt="Climes Banner Image" />
          </Link>
        </ClimesBanner>
        <ClimesLogoMobile></ClimesLogoMobile>
        <MenuOl>
          {PAGES.map((menuItem) => (
            <MenuLi key={`meni-item-${menuItem.label}`}>
              <Link to={menuItem.url}>{menuItem.label}</Link>
            </MenuLi>
          ))}
        </MenuOl>
      </Root>
    </>
  );
};

export default Header;
