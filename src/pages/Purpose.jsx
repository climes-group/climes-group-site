import Block from "../components/content/Block";
import Quote from "../components/content/Quote";

function Purpose() {
  return <div>
    <div>
      <p>
        The climate crisis is a critical threat to humanity, and we rely on our buildings for shelter from extreme weather.
        Yet our buildings aren't designed for the future, they are built to a climate that will never occur again.</p>
        <Quote fontSize="1.25em">
        Our mission is to advance climate resilience for all buildings in Canada.</Quote>
      <Block>
        <h3>Climate Resilience</h3>
        <p>
          We need to both <em>adapt</em> to the impacts of climate change and <em>mitigate</em> our emissions as fast as
          possible to reduce future impacts. This approach is called <em>climate resilience</em>.
          It is the only method we have to prepare ourselves for the future in a resource effective manner.
          The climate resilience approach ensures all our actions achieve both mitigation and adaptation
          through life-cycle thinking.
        </p>
      </Block>
    </div>
  </div>;

}
export default Purpose;
