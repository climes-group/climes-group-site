import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled from "styled-components";
import climesBannerUrlDark from "../../assets/logos/climes_eng_banner_dark_full.png";
import climesBannerUrl from "../../assets/logos/climes_eng_banner_light_full.png";
import climesLogoDark from "../../assets/logos/climes_logo_dark.png"; //Shortened logo
import climesLogoLight from "../../assets/logos/climes_logo_trim.png"; //Shortened logo
import { ThemeContext } from "../../containers/ThemeProvider";
import { PAGES } from "../../utils";
import MobileNav from "./MobileNav";

const Root = styled.div`
  position: relative;
  border-bottom: solid 3px var(--colour-accent);
  margin-bottom: 1em;
  background-color: var(--colour-bkg);
  -webkit-transition: background-color 0.1s linear;
  -moz-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;
`;

const DesktopHeader = styled.div`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;
  height: 100px;
  @media (max-width: 767px) {
    display: flex;
  }
`;

const ClimesBanner = styled.div`
  text-align: left;
  padding: 1em 0em;
  padding-bottom: 0px;
  img {
    height: 100px;

    @media (max-width: 767px) {
      display: none;
    }
    transition: all 0.5s;
  }
`;
const ClimesLogoMobile = styled.div`
  text-align: left;
  img {
    height: 80px;
    margin: 0.5em;
    margin-left: 1em;
  }
`;

const MenuOl = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0em;
  padding-left: 0px;
  z-index: 1;

  @media (max-width: 767px) {
    display: none;
  }
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
    color: var(--colour-link);
  }
`;

const DarkModeSwitchContainer = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

/**
 * Header component that displays nav in all viewports & sizes
 * @returns
 */
const Header = () => {
  const { isDarkMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Root>
      <DesktopHeader>
        <ClimesBanner>
          <Link to="/">
            <img
              src={isDarkMode ? climesBannerUrlDark : climesBannerUrl}
              alt="Climes Banner"
            />
          </Link>
        </ClimesBanner>
        <MenuOl>
          {PAGES.map((menuItem) => (
            <MenuLi key={`menu-item-${menuItem.label}`}>
              <Link to={menuItem.url}>{menuItem.label}</Link>
            </MenuLi>
          ))}
        </MenuOl>
      </DesktopHeader>
      <MobileHeader>
        <ClimesLogoMobile>
          <Link to="/">
            <img
              src={isDarkMode ? climesLogoDark : climesLogoLight}
              alt="Climes Logo"
            />
          </Link>
        </ClimesLogoMobile>
        <MobileNav />
      </MobileHeader>
      <DarkModeSwitchContainer
        onClick={toggleColorMode}
        title={"Toggle colour mode"}
      >
        <DarkModeSwitch
          checked={isDarkMode}
          size={45}
          moonColor="#f0efe3"
          sunColor="#575757"
        />
      </DarkModeSwitchContainer>
    </Root>
  );
};

export default Header;
