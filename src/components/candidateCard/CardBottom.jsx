import React from 'react';
import Button from '@mui/material/Button';

const Card = () => {
  return (
    <div data-cy="cardBottom" style={{with: '100%', display: 'flex', justifyContent: 'center', paddingBottom: 20}}>
      <Button 
        onClick={() => {console.log("This button doesn't do anything!")}} variant="contained"
        name='View profile'
      >
        View profile
      </Button>
    </div>
  );
};

export default Card;