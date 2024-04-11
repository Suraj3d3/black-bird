import React from "react";
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  ThemeProvider,
  createTheme,
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

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="home"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          position: "relative",
          "::before": {
            content: '""',
            // position: "absolute",
            position: "fixed",
            top: 10,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(./assets/world.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: -1,
            // backgroundColor: "rgba(255, 0, 0,0.8)",
          },
        }}
      >
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
              animation: `${blinkCursor} 1s steps(1) infinite, ${hideCursor} 2s forwards`,
            },
            animation: `${typing} 2s steps(20, end)`,
          }}
        >
          BLACK &nbsp; BIRD
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.5rem",
            marginBottom: isMobile ? "20px" : "40px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            color: "#2C3335",
          }}
        >
          Empowering Your Global Trade Success, from Export to Expansion
        </Typography>
        <Button
          variant="contained"
          href="#contactus"
          sx={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            borderRadius: "30px",
            backgroundColor: "#2C3335",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#2C3335",
            },
          }}
        >
          GET IN TOUCH
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
