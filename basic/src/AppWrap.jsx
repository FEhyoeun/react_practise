import React from 'react';

export default function AppWrap() {
  return (
    <>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
          name='Bob'
          size={200}
        />
      </Navbar>
    </>
  );
}

function Navbar({ children }) {
  return (
    <header style={{ backgroundColor: 'yellow' }}>
      {children}
    </header>

  )
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />

    </div>
  )
}