import { Link } from "react-router-dom";
import styled from "styled-components";
import { PAGES, THEME } from "./utils";
import { slide as Menu } from "react-burger-menu";

const Root = styled.div`
  padding-left: 4rem;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    background: linear-gradient(#f0efe3, #ffffff);
    height: 50px;
    z-index: 0;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuOl = styled.ol`
  position: relative;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 12px ${THEME.ACCENT};
  margin-bottom: 0px;
  padding-left: 0px;
  z-index: 1;
`;

const MenuLi = styled.li`
  padding: 1rem;
  padding-left: 4rem;
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

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  a {
    color: #fff;
  }
`;

const Header = ({ selected }) => {
  return (
    <>
      <Root>
        <MenuOl>
          {PAGES.map((menuItem) => (
            <MenuLi key={`meni-item-${menuItem.label}`}>
              <Link to={menuItem.url}>{menuItem.label}</Link>
            </MenuLi>
          ))}
        </MenuOl>
      </Root>
      <MobileOnly>
        <Menu right>
          {PAGES.map((menuItem) => (
            <Link to={menuItem.url}>{menuItem.label}</Link>
          ))}
        </Menu>
      </MobileOnly>
    </>
  );
};

export default Header;
