import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useParams } from "react-router-dom";

function Map() {
  const {lat, lng} = useParams();
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const generateMap = isLoaded
    ? <GoogleMap 
        zoom={10} 
        center={{lat: parseFloat(lat), lng: parseFloat(lng)}} 
        mapContainerClassName="map-container"> 
      </GoogleMap>
    : <div> Loading... </div>
  
  return (
    <div>
      {generateMap}
    </div>
  )
}

  export default Map