import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/Homepage'
import CoinPage from './Pages/CoinPage';
import { Box, styled } from '@mui/material'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom' 
import Footer from './Components/Footer';

function App() {

  const StyledBox = styled(Box)({
    backgroundColor : "#14161a",
    color : "white",
    minHeight : "200vh"
  })

  return (
    <BrowserRouter>
      <StyledBox>
        <Header />
        <Routes>
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/coins/:id' element = {<CoinPage />} />
        </Routes>
        <Footer />
        <Outlet />
      </StyledBox>
    </BrowserRouter>
  );
}

export default App;
