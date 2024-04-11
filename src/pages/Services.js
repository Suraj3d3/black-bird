import React from "react";
import {
  Grid,
  Box,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

import {
  ImportExportSharp,
  PublicSharp,
  ShowChartSharp,
} from "@mui/icons-material";

import ServicesBox from "../components/ServiceBox";

const boxItems = [
  {
    title: "Import & Export",
    description: "",
    IconComponent: ImportExportSharp,
  },
  {
    title: "Global shipping",
    description: "",
    IconComponent: PublicSharp,
  },
  {
    title: "Trading consultancy",
    description: "",
    IconComponent: ShowChartSharp,
  },
];

const theme = createTheme(); // Create a default theme

const OurServices = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="services"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#dfe4ea"
      padding={2}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#2f3542",
          fontFamily: "Bebas Neue, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: isMobile ? "40px" : "60px",
          marginTop: "50px",
        }}
      >
        Our Services
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Transform your dreams into reality with just a few clicks. Explore our
        areas of expertise.
      </Typography>
      <Grid
        container
        spacing={isMobile ? 8 : 4}
        justifyContent="center"
        marginTop="50px"
      >
        {boxItems.map((item, i) => {
          return (
            <ServicesBox
              title={item.title}
              description={item.description}
              IconComponent={item.IconComponent}
              key={i}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurServices;
