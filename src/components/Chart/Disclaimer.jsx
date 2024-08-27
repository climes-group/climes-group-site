import { useSelector } from "react-redux";
import ApplicableSystemsCard from "./Flow/Cards/ApplicableSystemsCard";
import SiteLocationCard from "./Flow/Cards/SiteLocationCard";
import FlowCard from "./Flow/FlowCard";
import GeoDialog from "./GeoDialog";

function Disclaimer() {
  const currStep = useSelector((s) => s.flow.currentStep);

  function renderInnerCard(currStep) {
    const { name } = currStep;
    switch (name) {
      case "siteLocation":
        return <SiteLocationCard />;
      case "applicableSystem":
        return <ApplicableSystemsCard />;
      default:
        return "";
        break;
    }
  }

  return (
    <>
      <GeoDialog></GeoDialog>

      <FlowCard step={currStep}>{renderInnerCard(currStep)}</FlowCard>
    </>
  );
}

export default Disclaimer;
