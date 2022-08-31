import React from 'react';
import CardTop from './cardTop';
import CardBottom from './cardBottom';

const Card = ({ candidate }) => {
  return (
    <section data-cy={candidate.id} style={{
      border: `1px solid #D8D8D8`,
      display: 'flex',
      boxShadow: 'none',
      borderRadius: 0,
      marginBottom: 15,
      flexDirection: 'column',
      backgroundColor: '#fff',
      width: 1000,
      maxWidth: '100%',
    }}>
      <CardTop candidate={candidate} />
      <CardBottom />
    </section>
  );
};

export default Card;