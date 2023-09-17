import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const NavigateHomeBtn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ArrowBackIcon onClick={() => navigate('/')} sx={{
      cursor: 'pointer',
      color: 'gray',
      transition: 'color 0.3s linear',
      ':hover': {
        color: '#000'
      }
    }}/>
  );
};
