import React from "react";
import {
  Typography,
  Grid,
  Paper,
  createTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function BusinessVentureGrid({ business }) {
  const theme = createTheme(); // Create a default theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sm={10} md={8}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "12px 16px" : "16px 24px", // Adjust padding for mobile
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          transition:
            "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {/* Left Content */}
        <Grid
          container
          alignItems="center"
          spacing={2}
          direction={isMobile ? "column" : "row"}
        >
          <Grid item>{business.icon}</Grid>
          <Grid item xs>
            <Typography
              variant={isMobile ? "h6" : "h5"} // Smaller title on mobile
              sx={{
                fontWeight: "bold",
                color: "#2C3335",
                transition: "transform 0.3s ease",
              }}
            >
              {business.title}
            </Typography>
            <Typography
              variant={isMobile ? "body2" : "body1"} // Adjust text size for mobile
              sx={{
                color: "#555",
                transition: "transform 0.3s ease",
              }}
            >
              {business.description}
            </Typography>
          </Grid>
        </Grid>

        {/* Right Content */}
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2C3335", // Button color
              color: "#fff",
              borderRadius: "8px", // Square button
              minWidth: "120px", // Increased button width
              height: "50px", // Button height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s ease, transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Apply scale transform on hover
              },
              marginTop: isMobile ? "12px" : "0", // Add margin-top on mobile for spacing
            }}
            href={business.link}
            target="_blank"
          >
            <ArrowForward />
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default BusinessVentureGrid;
