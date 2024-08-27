import CheckBoxIcon from "@mui/icons-material/CheckBox";
import WarningIcon from "@mui/icons-material/Warning";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setGeoData,
  setHumanAddress,
} from "../../../../state/slices/geoReducer";
const FlexRow = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

class GeoCode {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
  }
  get str() {
    return `${this.lat},${this.long}`;
  }
}

export default function SiteLocationCard(props) {
  const geoData = useSelector((s) => s.geo.geoData);
  const hasAcceptedTerms = useSelector((s) => s.geo.hasAcceptedTerms);
  const humanAddr = useSelector((s) => s.geo.humanAddress);
  const { lat, long } = geoData || {};
  const geoString = geoData ? `Latitude: ${lat}, longitude: ${long}` : "";
  const dispatch = useDispatch();
  const apiKey = import.meta.env.VITE_GEO_API_KEY;
  console.log(import.meta.env);
  async function lookUpHumanAddress(geo) {
    const { coords } = geo;

    const geoCode = new GeoCode(coords.latitude, coords.longitude);
    dispatch(setGeoData(geoCode));

    if (!apiKey) {
      return;
    }

    const baseGeoCodeApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;

    const finalUrl = `${baseGeoCodeApi}${geoCode.str}&key=${apiKey}`;
    console.log(finalUrl);
    try {
      const resp = await fetch(finalUrl);
      const jsonResp = await resp.json();
      console.log(jsonResp);
      if (jsonResp?.plus_code?.compound_code) {
        console.log("Setting Human Address");
        dispatch(setHumanAddress(jsonResp?.plus_code?.compound_code));
      }
    } catch (e) {
      console.error(e);
    }
  }

  const useDeviceLocation = () => {
    const currGeo =
      navigator.geolocation.getCurrentPosition(lookUpHumanAddress);
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        <Button variant="contained" onClick={useDeviceLocation}>
          Use device location
        </Button>
      </div>

      <div>
        <FlexRow>
          <div>Location Services:</div>
          <div>
            {hasAcceptedTerms ? (
              <CheckBoxIcon style={{ color: "rgb(52, 88, 0)" }} />
            ) : (
              <WarningIcon style={{ color: "rgb(226, 176, 70)" }} />
            )}
            {hasAcceptedTerms ? "Enabled" : ""}
          </div>
        </FlexRow>
        <FlexRow>
          <div>Geo Code: </div>
          <div>
            {geoData ? (
              `(${geoData.str ?? "not set"})`
            ) : (
              <WarningIcon style={{ color: "rgb(226, 176, 70)" }} />
            )}
          </div>
        </FlexRow>
        <FlexRow>
          <div>Address: </div>
          <div>
            {humanAddr ? (
              <>
                <div>{humanAddr}</div>
              </>
            ) : (
              <WarningIcon style={{ color: "rgb(226, 176, 70)" }} />
            )}
          </div>
        </FlexRow>
        {humanAddr && (
          <iframe
            width="450"
            height="250"
            frameborder="0"
            style={{ border: 0 }}
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${geoData.str}&zoom=18&maptype=satellite`}
            allowfullscreen
          ></iframe>
        )}
      </div>
    </>
  );
}
