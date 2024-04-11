import React from "react";
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import { keyframes } from "@emotion/react";

const theme = createTheme(); // Create a default theme

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: #333;
  }
`;

const hideCursor = keyframes`
  from, to {
    visibility: visible;
  }
  99% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
`;

const HomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          backgroundColor: "#F5F7FA",
          // backgroundImage: `url(./assets/world.png)`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          color: "#57606f",
          padding: isMobile ? "20px" : "40px",
          fontFamily: "Roboto, sans-serif",
          position: "relative",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h1"
              sx={{
                marginBottom: isMobile ? "10px" : "20px",
                color: "#2f3542",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontFamily: "Playfair Display,Oswald, sans-serif",
                fontOpticalSizing: "auto",
                fontSize: isMobile ? "50px" : "120px",
                fontWeight: 900,
                fontStyle: "normal",
                position: "relative",
                "&::after": {
                  content: '"|"',
                  position: "absolute",
                  right: 0,
                  width: "1rem",
                  height: "auto",
                  borderRight: "2px solid #333",
                  animation: `${blinkCursor} 1s steps(1) infinite, ${hideCursor} 3s forwards`,
                },
                animation: `${typing} 3s steps(20, end)`,
              }}
            >
              BLACK &nbsp; BIRD
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? "1rem" : "1.5rem",
                marginBottom: isMobile ? "20px" : "40px",
              }}
            >
              Empowering Your Global Trade Success, from Export to Expansion
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                borderRadius: "30px",
                backgroundColor: "#2C3335",
                ":hover": {
                  backgroundColor: "transparent",
                  color: "#2C3335",
                  borderColor: "#2C3335",
                },
              }}
            >
              GET IN TOUCH
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="./assets/stock.png"
              alt="Logo"
              style={{
                width: "100%", // Adjust the width as needed
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
