import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, styled, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {

  const StyledOuterBox = styled(Box)({
      width : "50%",
      display : "flex",
      marginLeft : "25%",
      
      justifyContent : 'space-around',
      backgroundColor : "#252526",
  })
  
  const StyledInnerBox = styled(Box)({
    display : "flex",
    color : "white",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : 'space-around',
    backgroundColor : "#252526",
  })

  return (
    <Box sx = {{
        backgroundColor : "#252526", 
        }}
    >
        <StyledOuterBox>
            <a href = "https://www.github.com" target="_blank" rel="noopener noreferrer">
                <StyledInnerBox>
                    <GitHubIcon sx = {{width : "100%"}}/>
                    <Typography sx = {{fontSize : "16px", marginTop : "10px"}}> Github</Typography>
                </StyledInnerBox>
            </a>
            <a href = "https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <StyledInnerBox>
                    <TwitterIcon sx = {{width : "100%"}}/>
                    <Typography sx = {{fontSize : "16px", marginTop : "10px"}}> Twitter</Typography>
                </StyledInnerBox>
            </a>
            <a href = "https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <StyledInnerBox>
                    <FacebookIcon sx = {{width : "100%"}}/>
                    <Typography sx = {{fontSize : "16px", marginTop : "10px"}}> Facebook</Typography>
                </StyledInnerBox>
            </a>
        </StyledOuterBox>
        <Typography variant = 'h6' sx = {{marginLeft : "45%", marginTop : "20px",fontSize : "14px", fontFamily : "Montserrat"}}>
            © 2022 Hrithik Raj 
        </Typography>
    </Box>
  )
}

export default Footer