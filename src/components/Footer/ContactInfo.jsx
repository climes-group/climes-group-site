import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 1rem;

  @media (max-width: 1024px) {
    align-self: flex-end;
  }
`;

function ContactInfo() {
  return (
    <Root>
      <h3>Contact</h3>
      <div>Robert Lepage | PhD., P.Eng</div>
      <div>
        <a href="mailto: rob@climesgroup.ca">rob@climesgroup.ca</a>
      </div>
      <div>
        <a href="tel:+12268689865">226-868-9865</a>
      </div>
    </Root>
  );
}

export default ContactInfo;
