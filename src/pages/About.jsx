import Block from "../components/content/Block";

function About() {
  return (
    <div>
      <h2>Purpose</h2>
      <p>
        Climes Group was established in 2023 for the purpose of advancing climate resilience in buildings.
        The climate crisis is a critical threat to humanity, and we rely on our buildings for shelter from extreme weather.
        Yet our buildings aren't designed for the future, they are built to a climate that will never occur again.
        Our mission is to advance climate resilience for all buildings in Canada.</p>
      <h2>Climate Resilience</h2>
      <p>
        We need to both <em>adapt</em> to the impacts of climate change and <em>mitigate</em> our emissions as fast as
        possible to reduce future impacts. This approach is called <em>climate resilience</em>.
        It is the only method we have to prepare ourselves for the future in a resource effective manner.
        The climate resilience approach ensures all our actions achieve both mitigation and adaptation
        through life-cycle thinking.
      </p>
      <h2>Services</h2>
      <p>
        Climes is structured to provide climate resilienec services for new and existing buildings. 
        To best serve you, Climes Group has 3 divisions:
      </p>
      <Block>
        <h2><a href="/Services#consulting">Climes Consulting</a></h2>
        <p>
          Where we provide building engineering consulting services, from climate risk assessments, design development, and forensics
        </p>

        <h2><a href="/Services#research">Climes Research</a></h2>
        <p>
          Where we address foundational and innovative research questions
        </p>
        <h2><a href="/Services#academy">Climes Academy</a></h2>
        <p>
          Where we translate our expert knowledge into workshops, seminars, and training material
        </p>
      </Block>

    </div>
  );
}

export default About;
