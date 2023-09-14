import Block from "../components/content/Block";

function About() {
  return (
    <div>

      <h2>Robert Lepage | PhD., P.Eng.</h2>
      <h3>Founding Principal</h3>
      <p>Dr. Robert Lepage, P.Eng., is a nationally recognized expert in climate change resilience for 
        buildings. He advises on climate adaptation and mitigation pathways in existing buildings 
        and new construction. Part of these efforts includes serving on regional, national, and 
        international standard and guideline committees. With insights into the emerging challenges 
        of climate change impacts on buildings based on his climate risk assessment and building 
        science consulting experience, Dr. Lepage provides industry leading support to address 
        climate change.  These services range from specific project support to delivering workshops, 
        lectures, and guidance material on climate resilience principles, heuristics, and tools to
         increase awareness and help develop solutions. </p>
      <Block>
        <h3>Key Project</h3>
        <p>
          <ul>
            <li>
              <a href="https://pievc.ca/2019/03/24/climate-change-vulnerability-assessment-for-nanaimo-regional-general-hospital-nrgh/" target="_blank">
                Vancouver Island Health Authority – Nanaimo Regional General Hospital Climate Vulnerability Assessment</a></li>
            <li>British-Columbia Climate Action Secretariat – Public Sector Organization Resilient Buildings</li>
            <li>
              <a href="https://www.rdh.com/wp-content/uploads/2021/07/Climate-Change-Resilience-for-Buildings-Primer.pdf" target="_blank">
                BC Housing - Climate Change Resilience for Buildings</a></li>
            <li>Vancouver Island Health Authority – Gorge Road Hospital Climate Impact Overheating Study</li>
            <li>UBC Brock Commons – Mass Timber Durability Specialist</li>
          </ul>
        </p>
      </Block>
      <Block>
        <h3>Service</h3>
        <ul>
          <li>ISO/TC 59/SC 14 Design Life – Canadian Mirror Committee</li>
          <li>CSA S478 Standard Committee – Member</li>
          <li>Resilient Guidelines for Health Facility Design and Operations – Advisor</li>
          <li>University of Waterloo Architectural Engineering Program – Lecturer</li>
        </ul>
      </Block>
      <Block>
        <h3>Membership</h3>
        <ul>
          <li>Professional Engineers Ontario – Professional Engineer</li>
          <li>Engineers and Geoscientists BC – Professional Engineer</li>
        </ul>
      </Block>
      <Block>
        <h3>Education</h3>
        <ul>
          <li>PhD., Building Science, University of Victoria</li>
          <li>MASc., Civil Engineering, University of Waterloo</li>
          <li>BAsc., with Distinction, Honours, Civil Engineering, University of Waterloo</li>
        </ul>
      </Block>

    </div>
  );
}

export default About;
