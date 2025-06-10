// Header.jsx
// This component displays the header of the weather app, including a title and subtitle.

import Typography from '@mui/material/Typography';
import WindVane from './Vane';

// PARAMS:
// - NONE
function Header() {
  return (
    <>
        <WindVane />
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
        Weather App
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: '#e3f2fd', textAlign: 'center' }}>
        Get the weather of any city!
      </Typography>
    </>
  );
}

export default Header;
