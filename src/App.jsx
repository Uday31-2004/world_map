import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import WorldMap from "./assets/world.svg";
import { Box, Button } from "@mui/material";

function App() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [paths, setPaths] = useState([]);

  const [countryNames, setCountryNames] = useState({});

  useEffect(() => {
    // Fetch paths from the world.svg file
    const fetchPaths = async () => {
      try {
        const response = await fetch(WorldMap);
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const paths = svgDoc.getElementsByTagName("path");
        setPaths(Array.from(paths));

        // Extract country names dynamically stored in <g cc=""/> attributes
        const gElements = svgDoc.querySelectorAll('g[cc]');
        const names = {};
        gElements.forEach((g) => {
          const countryCode = g.getAttribute('cc');
          const countryName = g.getAttribute('title');
          names[countryCode] = countryName;
        });
        setCountryNames(names);
      } catch (error) {
        console.error("Error fetching paths:", error);
      }
    };

    fetchPaths();
  }, []);
  console.log(countryNames)
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 40);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 40, 10));
  };

  const handleMouseEnter = (event) => {
    const countryCode = event.target.getAttribute("title");
    const countryName = countryNames[countryCode];
    console.log("Hovered Country:", countryName);
    setHoveredCountry(countryName);
  };
  

  const handleMouseLeave = (event) => {
    setHoveredCountry(null);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <Grid item>
        <h1>World Map</h1>
      </Grid>
      <Grid
        item
        border={"5px solid black"}
        borderRadius={"10%"}
        padding={"30px 30px"}
        margin={"auto"}
        style={{ position: "relative", maxWidth: "1500px", overflow: "hidden" }} // Adjust the max width as needed
      >
        <div
          className="map-container"
          style={{ position: "relative", width: "100%", height: "auto" }}
        >
          <img
            src={WorldMap}
            alt="World Map"
            style={{
              //cursor: 'pointer',
              width: "100%",
              height: "750px",
              transform: `scale(${zoomLevel / 100})`,
              transition: "transform 0.3s ease",
            }}
            useMap="#worldMap" // Use the map attribute to link to the map element
          />
          <map name="worldMap">
            {/* Define the areas for each country */}
            <map name="worldMap">
              {/* Dynamically generate areas based on paths */}
              {paths.map((path, index) => (
                <area
                  key={index}
                  title={path.getAttribute("title")}
                  shape="poly"
                  coords={path.getAttribute("d")} // Use the 'd' attribute as coordinates
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </map>
            {/* Add more areas for other countries */}
          </map>

          {hoveredCountry && (
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "8px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {hoveredCountry}
            </Box>
          )}
          <Box
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button onClick={handleZoomIn} variant="outlined" size="medium">
              +
            </Button>
            <Button onClick={handleZoomOut} variant="outlined" size="medium">
              -
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
