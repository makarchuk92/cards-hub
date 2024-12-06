import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container fixed>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default App;
