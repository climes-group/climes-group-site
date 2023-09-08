import styled from "styled-components";

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
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
