import React from "react";
import {
  Box,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

import LocationBox from "../components/LocationBox";
import { locationsInfo } from "../utils/info";

const OfficeComponent = () => {
  const theme = createTheme(); // Create a default theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="locations"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: isMobile ? "10px" : "20px",
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          color: "#333",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "50px",
            marginTop: "50px",
            color: "#2f3542",
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: isMobile ? "40px" : "60px",
            // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Discover Our Locations
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {locationsInfo.map((location) => {
            return (
              <LocationBox
                officeType={location.officeType}
                address={location.address}
                contact={location.contact}
              />
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default OfficeComponent;
