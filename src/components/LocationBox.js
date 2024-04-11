import React from "react";
import {
  Typography,
  Grid,
  Paper,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/CallRounded";

function LocationBox({ officeType, address, contact }) {
  const theme = createTheme(); // Create a default theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          minHeight: "280px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition:
            "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#2C3335",
            color: "#f7f1e3",
          },
        }}
      >
        <LocationOnIcon
          sx={{
            fontSize: isMobile ? 30 : 40,
            marginBottom: "10px",
          }}
        />
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          {officeType}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          {address}
        </Typography>

        <CallIcon sx={{ marginTop: "10px" }} />
        <Typography
          variant="body1"
          sx={{
            marginBottom: "10px",
          }}
        >
          {contact}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LocationBox;
