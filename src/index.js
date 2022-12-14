import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const AppClass = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  });
  return (
    <App/>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback = {null}>
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
  </Suspense>
);
