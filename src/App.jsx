import React from 'react';
import ShooterGame from './ShooterGame';
import AdSidebar from './AdSidebar';

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* The game area */}
      <div style={{ flex: 1, border: '1px solid black' }}>
        <ShooterGame />
      </div>

      {/* Ad space */}
      <div style={{ width: '300px', border: '1px solid green' }}>
        <AdSidebar />
      </div>
    </div>
  );
}