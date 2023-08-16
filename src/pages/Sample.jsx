import Block from "../components/content/Block";
import Figure from "../components/content/Figure";
import peoImgUrl from "../assets/logo-peo-en.png";
import Row from "../components/content/Row";

function Sample() {
  return (
    <>
      <h2>Heading level 2 - Sample content</h2>
      <Block>
        <h3>Heading level 3 - Sample figures</h3>
        <Row>
          <Figure src={peoImgUrl} label="Fig. 1. Example figure" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales, augue faucibus feugiat dapibus, massa lacus aliquam nulla,
            at viverra nisi ex at tortor. Nam placerat laoreet orci sed egestas.
            Curabitur in mauris finibus magna euismod volutpat sed a justo.
            Aenean ullamcorper libero id enim tincidunt ornare. Aen
          </p>
        </Row>
      </Block>
      <Block>
        <h3>Heading level 3 - Test content</h3>
        <Row>
          <Figure src={peoImgUrl} label="Fig. 1. Example figure" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales, augue faucibus feugiat dapibus, massa lacus aliquam nulla,
            at viverra nisi ex at tortor. Nam placerat laoreet orci sed egestas.
            Curabitur in mauris finibus magna euismod volutpat sed a justo.
            Aenean ullamcorper libero id enim tincidunt ornare. Aen
          </p>
        </Row>
      </Block>
    </>
  );
}

export default Sample;
