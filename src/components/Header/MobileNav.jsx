import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PAGES } from "../../utils";

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  margin-top: -0.5em;
  a {
    color: #fff;
  }
`;

export default function MobileNav() {
  return (
    <MobileOnly>
      <Menu right>
        {PAGES.map((menuItem) => (
          <Link to={menuItem.url}>{menuItem.label}</Link>
        ))}
      </Menu>
    </MobileOnly>
  );
}
