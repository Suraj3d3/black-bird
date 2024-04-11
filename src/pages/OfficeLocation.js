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

const OfficeComponent = () => {
  const locations = [
    {
      officeType: "Head Office",
      address: "Holding No:04, Cross Road No 17, Mango, Jamshedpur",
      contact: "123-456-7890",
    },
    {
      officeType: "Branch Office",
      address:
        "Ground Floor, D-9, Desk No 45, Noida, Sector 3, Noida, Gautambuddha Nagar, Uttar Pradesh, 201301",
      contact: "123-456-7890",
    },
  ];

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
          {locations.map((location) => {
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
