import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { TrendingCoins } from '../../Config/api'
import AliceCarousel from 'react-alice-carousel'
import { CryptoState } from '../../CryptoContext'

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {

  const { currency, symbol } = CryptoState()
  const [trending, setTrending] = useState([])

  const StyledLink = styled(Link)({
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    cursor : "pointer",
    textTransform : "uppercase",
    color : "white"
  })
  const StyledBox = styled(Box)(({theme}) => ({
    height : "50%",
    display : "flex",
    alignItems : "center"
  }))

  useEffect(() => {
    const fetchTrendingCoins = async() => {
      const { data } = await axios.get(TrendingCoins(currency))
      setTrending(data)
    }
    fetchTrendingCoins()
  }, [currency])
  
  const items = trending.map((coin) => {
      let profit = coin.price_change_percentage_24h >= 0;

      return (
        <StyledLink
          to = {`/coins/${coin.id}`}
        >
          <img
            src = {coin?.image}
            alt = {coin.name}
            height = "80"
            style = {{ marginBottom : 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;  
            <span 
            style = {{
              color : profit > 0 ? "rgb(14,203,129)" : "red",
              fontWeight : 500
            }}
            >
              {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>

          <span style = {{fontSize : 22, fontWeight : 500}}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed())}
          </span>
        </StyledLink>
      )
  })

  const responsive ={
    0: {
      items : 2
    },
    512: {
      items : 4
    },
  }
    
  return (
    <StyledBox>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval = {1000}
          animationDuration = {1500}
          disableDotsControls
          disableButtonsControls
          responsive = {responsive}
          autoPlay
          items = {items}
        />
    </StyledBox>
  )
}

export default Carousel