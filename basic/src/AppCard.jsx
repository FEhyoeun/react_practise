import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        Card 1
      </Card>

      <Card>
        Card2
        설명
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center'
      }}
    >
      {children}
    </div>
  )
}

