import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import { AppBar, createTheme, MenuItem, Select, styled, ThemeProvider, Toolbar, Typography } from '@mui/material'

const Header = () => {

  const navigate = useNavigate()

  const { currency, setCurrency } = CryptoState()

  const StyledToolbar = styled(Toolbar)({
    display : "flex",
  })

  const StyledTypo = styled(Typography)({
    flex : 1,
    color : "gold",
    fontFamily : "Montserrat",
    fontWeight : "bold",
    cursor : "pointer"
  })

  const darkTheme = createTheme({
      palette : {
        primary : {
          main : "#fff"
        },
        type : "dark",
      }
    
  })

  return (
    <ThemeProvider theme = {darkTheme}>
    <AppBar color = "transparent" position = "static">
      <StyledToolbar>
        <StyledTypo onClick = {() => {navigate('/')}} variant = "h5"> Crypto Explorer</StyledTypo>
        <Select  // TODO : Change Color 
          variant = "outlined"
          sx = {{
            color : "white",
            width : 100,
            height : 40,
            marginRight : 15,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            } 
          }}
          value = {currency}
          onChange = {(event) => setCurrency(event.target.value)}
          >
          <MenuItem value = 'USD'>USD</MenuItem>
          <MenuItem value = 'INR'>INR</MenuItem>
        </Select>
      </StyledToolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header