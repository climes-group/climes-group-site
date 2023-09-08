import Block from "../components/content/Block";

function About() {
  return (
    <div>
      <p>
        Climes Group was established in 2023 for the purpose of advancing climate resilience in buildings.
        Our climate is changing, but our buildings aren’t.
      </p>
      <p>
        The climate crisis is a critical threat to our building infrastructure.
        We need to both <b>adapt</b> to the impacts of climate change and mitigate our emissions as fast as
        possible to reduce future impacts. This approach is called climate resilience.
        It is the only method we have to prepare ourselves for the future in a resource conscious manner.
        The climate resilience approach ensures all our actions achieve both mitigation and adaptation
        through life-cycle thinking.
      </p>
      <p>
        To best serve you, Climes Group has 3 divisions:
      </p>
      <Block>
      <h2>Climes Consulting</h2>
      <p>
        Where we provide building engineering consulting services, from climate risk assessments, design development, and forensics
      </p>

      <h2>Climes Research</h2>
      <p>
        Where we address foundational and innovative research questions
      </p>
        <h2>Climes Academy</h2>
        <p>
          Where we translate our expert knowledge into workshops, seminars, and training material
        </p>
      </Block>

    </div>
  );
}

export default About;
