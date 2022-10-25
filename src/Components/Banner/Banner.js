import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'
import Carousel from './Carousel'

const Banner = () => {

    const StyledImageBox = styled(Box)({
        backgroundImage : "url(./banner.jpg)"
    })

    const StyledTaglineBox = styled(Box)({
        display : "flex",
        height : "40%",
        flexDirection : "column",
        justifyContent : "center",
        textAlign : "center"
    })

    const StyledContainer = styled(Container)({
        height : 400,
        display : "flex",
        flexDirection : "Column",
        paddingTop : 25,
        justifyContent : "space-around"
    })

    return (
        <StyledImageBox>
            <StyledContainer>
                <StyledTaglineBox>
                    <Typography variant = "h2" 
                        sx = {{
                            fontWeight : "bold",
                            marginBottom : "15px",
                            fontFamily : "Montserrat"
                        }}
                    >
                        Crypto Explorer
                    </Typography>
                    <Typography variant = "subtitle2" 
                        sx = {{
                            color : "darkgrey",
                            textTransform : "capitalize",
                            fontFamily : "Montserrat"
                        }}
                    >
                        Get all the Info regarding your Favourite Crypto Currency
                    </Typography>
                </StyledTaglineBox>
                <Carousel />
            </StyledContainer>
        </StyledImageBox>
    )
}

export default Banner