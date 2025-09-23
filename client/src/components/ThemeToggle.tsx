import React from 'react';
import { IconButton, useTheme as useMuiTheme, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: mode === 'light' ? 'text.primary' : 'white',
          backgroundColor: mode === 'light'
            ? 'rgba(37, 99, 235, 0.1)'
            : 'rgba(255, 255, 255, 0.1)',
          borderRadius: 2,
          p: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: mode === 'light'
              ? 'rgba(37, 99, 235, 0.2)'
              : 'rgba(255, 255, 255, 0.2)',
            transform: 'scale(1.1)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? (
          <Brightness4 sx={{ fontSize: 20 }} />
        ) : (
          <Brightness7 sx={{ fontSize: 20 }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
