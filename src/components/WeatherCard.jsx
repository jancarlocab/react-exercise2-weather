// WeatherCard.jsx
// This component displays weather information in a card format using Material-UI components.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


// PARAMS:
// - data: weather data object containing temperature, wind, and description
// - city: name of the city for which the weather is displayed

function WeatherCard({ data, city }) {
  return (
    <Card 
      sx={{
        maxWidth: 500,
        margin: '20px auto',
        padding: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 4,
        boxShadow: 4,
        backdropFilter: 'blur(4px)',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          Weather in {city}
        </Typography>

        {/* box and chips for weather data (MUI) */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3, justifyContent: 'center' }}>
          <Chip 
            icon={<ThermostatIcon />} 
            label={`${data.temperature}`} 
            color="error" 
            variant="outlined"
          />
          <Chip 
            icon={<AirIcon />} 
            label={`Wind: ${data.wind}`} 
            color="info" 
            variant="outlined"
          />
          <Chip 
            icon={<WbSunnyIcon />} 
            label={data.description} 
            color="warning" 
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
