// WindVane.jsx
// Image that spins like a weather vane
// Reference: https://codepen.io/wagnerbeethoven/pen/zrmbWy

import Box from '@mui/material/Box';

// PARAMS:
// - NONE
function WindVane() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      <Box
        component="img"
        src="https://www.cataventofotografia.com.br/wp-content/uploads/2015/11/logo-g.png"
        alt="Weather app"
        sx={{
          width: 80,
          height: 80,
          animation: 'spinVane 1s linear infinite',
        }}
      />
    </Box>
  );
}

export default WindVane;
