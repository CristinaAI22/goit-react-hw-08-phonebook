import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 16px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
