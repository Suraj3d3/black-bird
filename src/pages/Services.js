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
    description:
      "Discover the world of superior silica exports with us. As a leading exporter, we pride ourselves on delivering top-notch silica products tailored to meet your specific industrial requirements. Our extensive range of high-purity silica is sourced from reputable suppliers, ensuring consistent quality and reliability in every shipment.",
    detailedDescription:
      "At our core, we prioritize customer satisfaction and strive to exceed expectations with every interaction. Whether you require silica for glass production, foundry molds, or other industrial applications, we have the expertise and resources to fulfill your needs.",
    IconComponent: ImportExportSharp,
  },
  {
    title: "Global shipping",
    description:
      "Our global shipping facility ensures efficient and reliable delivery of our silica products to customers worldwide. With a strong network of logistics partners, we guarantee timely and secure transportation, allowing us to reach markets across the globe. Experience seamless global shipping with our silica export services. ",
    detailedDescription:
      "Our expert team manages all aspects of shipping, from documentation to customs clearance, providing a hassle-free experience. Whether you need bulk shipments or specialized packaging, we offer flexible solutions tailored to your needs. Partner with us for reliable and convenient global shipping of your silica products.",
    IconComponent: PublicSharp,
  },
  {
    title: "Trading consultancy",
    description:
      "Our consultancy offers expert guidance and strategic advice to businesses looking to navigate the complexities trade. Whether you're entering new markets or seeking to streamline your trading processes, our consultancy services are designed to help you succeed in today's competitive economy. We are committed to your success.",
    detailedDescription:
      "We offer personalized consultancy services designed to meet your specific investment goals and risk tolerance.Our consultancy services encompass a wide range of areas, including stock selection, portfolio diversification, risk management, and market analysis. We leverage cutting-edge tools and technologies to provide you with timely and actionable advice, helping you make informed decisions in today's fast-paced markets.",
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
              detailedDescription={item.detailedDescription}
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
