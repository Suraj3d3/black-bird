import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { BusinessCenter, TrendingUp, ArrowForward } from "@mui/icons-material";
import { businessVenturesInfo } from "../utils/info";
import BusinessVentureGrid from "../components/BusinessVentureGrid";

const BusinessComponent = () => {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={1}
        sx={{
          padding: isMobile ? "20px" : "40px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "30px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#2f3542",
              fontFamily: "Bebas Neue, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "32px" : "48px",
            }}
          >
            Explore Our Business Ventures
          </Typography>
        </Grid>

        {businessVenturesInfo.map((business, index) => (
          <BusinessVentureGrid business={business} key={index} />
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default BusinessComponent;
