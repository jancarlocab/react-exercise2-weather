// CityInput.jsx
// This component provides a text field for entering a city name and a button to fetch weather data.

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

// Text field and fetch button for city input
// PARAMS
// - city: current city input value
// - onChange: function to handle input changes
// - onKeyPress: function to handle key presses (e.g., Enter key)
// - onFetch: function to fetch weather data
// - loading: boolean indicating if data is being fetched (for loading state)

function CityInput({ city, onChange, onKeyPress, onFetch, loading }) {
  return (
    <>
      {/* Text field for CITY input */}
      <TextField
        variant="filled"
        label="Enter City"
        value={city}
        onChange={onChange}
        onKeyPress={onKeyPress}
        fullWidth
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 1,
          input: { color: '#333' },
        }}
        helperText="Type a city name to get the weather information"
      />

      {/* Button for fetching weather data, with loading indicator */}
      <Button 
        variant="contained" 
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        onClick={onFetch}
        disabled={loading}  // button disabled when loading
        sx={{ 
          backgroundColor: '#1976d2', 
          color: 'white', 
          '&:hover': { backgroundColor: '#115293' },
          '&:disabled': { backgroundColor: '#ccc' }, // disabled color
          marginBottom: '20px',
          marginTop: '10px'
        }}
      >
        {loading ? 'Fetching...' : 'Fetch Weather'}
      </Button>
    </>
  );
}

export default CityInput;
