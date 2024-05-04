import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import WorldMap from './assets/world.svg';
import { Box, Button } from '@mui/material';

function App() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 40);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 40, 10));
  };

  const handleMouseEnter = (event, countryCode) => {
    // Retrieve the country name based on the country code
    const countryName = countryNames[countryCode];
    setHoveredCountry(countryName);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const countryNames = {
    "AF": "Afghanistan", 
  "AL": "Albania", 
  "DZ": "Algeria", 
  "AI": "Anguilla", 
  "AM": "Armenia", 
  "AW": "Aruba", 
  "AT": "Austria", 
  "BH": "Bahrain", 
  "BD": "Bangladesh", 
  "BB": "Barbados", 
  "BY": "Belarus", 
  "BE": "Belgium", 
  "BZ": "Belize", 
  "BJ": "Benin", 
  "BM": "Bermuda", 
  "BT": "Bhutan", 
  "BO": "Bolivia", 
  "BA": "Bosnia and Herzegovina", 
  "BW": "Botswana", 
  "BR": "Brazil", 
  "VG": "British Virgin Islands", 
  "BN": "Brunei Darussalam", 
  "BG": "Bulgaria", 
  "BF": "Burkina Faso", 
  "BI": "Burundi", 
  "KH": "Cambodia", 
  "CM": "Cameroon", 
  "CF": "Central African Republic", 
  "TD": "Chad", 
  "CO": "Colombia", 
  "CR": "Costa Rica", 
  "HR": "Croatia", 
  "CU": "Cuba", 
  "CW": "Curaçao", 
  "CZ": "Czech Republic", 
  "CI": "Côte d'Ivoire", 
  "KP": "Dem. Rep. Korea", 
  "CD": "Democratic Republic of the Congo", 
  "DJ": "Djibouti", 
  "DM": "Dominica", 
  "DO": "Dominican Republic", 
  "EC": "Ecuador", 
  "EG": "Egypt", 
  "SV": "El Salvador", 
  "GQ": "Equatorial Guinea", 
  "ER": "Eritrea", 
  "EE": "Estonia", 
  "ET": "Ethiopia", 
  "FI": "Finland", 
  "GF": "French Guiana", 
  "GA": "Gabon", 
  "GE": "Georgia", 
  "DE": "Germany", 
  "GH": "Ghana", 
  "GL": "Greenland", 
  "GD": "Grenada", 
  "GU": "Guam", 
  "GT": "Guatemala", 
  "GN": "Guinea", 
  "GW": "Guinea-Bissau", 
  "GY": "Guyana", 
  "HT": "Haiti", 
  "HN": "Honduras", 
  "HU": "Hungary", 
  "IS": "Iceland", 
  "IN": "India", 
  "IR": "Iran", 
  "IQ": "Iraq", 
  "IE": "Ireland", 
  "IL": "Israel", 
  "JM": "Jamaica", 
  "JO": "Jordan", 
  "KZ": "Kazakhstan", 
  "KE": "Kenya", 
  "XK": "Kosovo", 
  "KW": "Kuwait", 
  "KG": "Kyrgyzstan", 
  "LA": "Lao PDR", 
  "LV": "Latvia", 
  "LB": "Lebanon", 
  "LS": "Lesotho", 
  "LR": "Liberia", 
  "LY": "Libya", 
  "LT": "Lithuania", 
  "LU": "Luxembourg", 
  "MK": "Macedonia", 
  "MG": "Madagascar", 
  "MW": "Malawi", 
  "MV": "Maldives", 
  "ML": "Mali", 
  "MH": "Marshall Islands", 
  "MQ": "Martinique", 
  "MR": "Mauritania", 
  "YT": "Mayotte", 
  "MX": "Mexico", 
  "MD": "Moldova", 
  "MN": "Mongolia", 
  "ME": "Montenegro", 
  "MS": "Montserrat", 
  "MA": "Morocco", 
  "MZ": "Mozambique", 
  "MM": "Myanmar", 
  "NA": "Namibia", 
  "NR": "Nauru", 
  "NP": "Nepal", 
  "NL": "Netherlands", 
  "BQBO": "Netherlands", 
  "NI": "Nicaragua", 
  "NE": "Niger", 
  "NG": "Nigeria", 
  "PK": "Pakistan", 
  "PW": "Palau", 
  "PS": "Palestine", 
  "PA": "Panama", 
  "PY": "Paraguay", 
  "PE": "Peru", 
  "PL": "Poland", 
  "PT": "Portugal", 
  "QA": "Qatar", 
  "CG": "Republic of Congo", 
  "KR": "Republic of Korea", 
  "RE": "Reunion", 
  "RO": "Romania", 
  "RW": "Rwanda", 
  "BQSA": "Saba (Netherlands)", 
  "LC": "Saint Lucia", 
  "VC": "Saint Vincent and the Grenadines", 
  "BL": "Saint-Barthélemy", 
  "MF": "Saint-Martin", 
  "SA": "Saudi Arabia", 
  "SN": "Senegal", 
  "RS": "Serbia", 
  "SL": "Sierra Leone", 
  "SX": "Sint Maarten", 
  "SK": "Slovakia", 
  "SI": "Slovenia", 
  "SO": "Somalia", 
  "ZA": "South Africa", 
  "SS": "South Sudan", 
  "ES": "Spain", 
  "LK": "Sri Lanka", 
  "BQSE": "St. Eustatius (Netherlands)", 
  "SD": "Sudan", 
  "SR": "Suriname", 
  "SZ": "Swaziland", 
  "SE": "Sweden", 
  "CH": "Switzerland", 
  "SY": "Syria", 
  "TW": "Taiwan", 
  "TJ": "Tajikistan", 
  "TZ": "Tanzania", 
  "TH": "Thailand", 
  "GM": "The Gambia", 
  "TL": "Timor-Leste", 
  "TG": "Togo", 
  "TN": "Tunisia", 
  "TM": "Turkmenistan", 
  "TV": "Tuvalu", 
  "UG": "Uganda", 
  "UA": "Ukraine", 
  "AE": "United Arab Emirates", 
  "UY": "Uruguay", 
  "UZ": "Uzbekistan", 
  "VE": "Venezuela", 
  "VN": "Vietnam", 
  "EH": "Western Sahara", 
  "YE": "Yemen", 
  "ZM": "Zambia", 
  "ZW": "Zimbabwe"
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', overflow: 'hidden' }}
    >
      <Grid item>
        <h1>World Map</h1>
      </Grid>
      <Grid item
        border={"5px solid black"}
        borderRadius={"10%"}
        padding={"30px 30px"}
        margin={"auto"}
        style={{ position: 'relative', maxWidth: '1500px', overflow: 'hidden' }} // Adjust the max width as needed
      >
        <div
          className='map-container'
          style={{ position: 'relative', width: '100%', height: 'auto' }}
        >
          <img
            src={WorldMap}
            alt="World Map"
            style={{
              width: '100%',
              height: 'auto',
              transform: `scale(${zoomLevel / 100})`,
              transition: 'transform 0.3s ease',
            }}
          />
          {hoveredCountry && (
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '8px',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {hoveredCountry}
            </Box>
          )}
          <Box style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column', }}>
            <Button onClick={handleZoomIn} variant="outlined" size='medium'>+</Button>
            <Button onClick={handleZoomOut} variant="outlined" size='medium'>-</Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
