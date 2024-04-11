import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";

const theme = createTheme(); // Create a default theme

const CirclePaper = styled(Paper)(({ theme }) => ({
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const PointsComponent = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
          padding: "20px",
          backgroundImage: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#2f3542",
            marginBottom: "20px",
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: isMobile ? "40px" : "60px",
            // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          OUR SERVICES
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box mb={isMobile ? 2 : 0} mr={isMobile ? 0 : 2}>
                <CirclePaper
                  sx={{ backgroundColor: "#FFC0CB", cursor: "pointer" }}
                >
                  <Typography variant="h5">Silica import export</Typography>
                </CirclePaper>
              </Box>
              <Box mb={isMobile ? 2 : 0} mx={2}>
                <CirclePaper
                  sx={{ backgroundColor: "#87CEEB", cursor: "pointer" }}
                >
                  <Typography variant="h5">Global shipping</Typography>
                </CirclePaper>
              </Box>
              <Box mb={isMobile ? 2 : 0} ml={isMobile ? 0 : 2}>
                <CirclePaper
                  sx={{ backgroundColor: "#FFA07A", cursor: "pointer" }}
                >
                  <Typography variant="h5">Trading consultancy</Typography>
                </CirclePaper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default PointsComponent;
