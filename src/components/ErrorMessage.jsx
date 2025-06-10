// ErrorMessage.jsx

import React from 'react';
import Alert from '@mui/material/Alert';


// ErrorMessage component
// PARAMS
// - message: The error message to display
function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <Alert severity="error" sx={{ marginTop: '20px' }}>
      {message}
    </Alert>
  );
}

export default ErrorMessage;