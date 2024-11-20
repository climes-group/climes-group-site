import Block from "../components/content/Block";

function NewPage() {
  return (
    <div>
      <h2>Heading lvl 2</h2>
      <h3>Heading lvl 3</h3>

      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <Block>
        <h3>Heading lvl 3</h3>
        <p>
          Here are some useful links:
          <ul>
            <li>
              <a href="https://example.com/item1">Item 1</a>
            </li>
            <li>
              <a href="https://example.com/item2">Item 2</a>
            </li>
            <li>
              <a href="https://example.com/item3">Item 3</a>
            </li>
          </ul>
        </p>
      </Block>
    </div>
  );
}

export default NewPage;
