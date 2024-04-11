import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Link,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";

const theme = createTheme();

const Footer = () => {
  const FooterNavItems = [
    { title: "Home", id: "#home" },
    { title: "Services", id: "#services" },
    { title: "Our locations", id: "#locations" },
    { title: "contact us", id: "#contactus" },
    { title: "Credits", id: "#credits" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#2C3335",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          position: "static",
          bottom: 0,
          left: 0,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
          "@media (min-width: 600px)": {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Black Bird
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <LocationOn sx={{ marginRight: "5px" }} />
            Holding No:04, Cross Road No 17, Mango, Jamshedpur, India
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <Email sx={{ marginRight: "5px" }} />
            support@blackbird.com
          </Typography>
          <Typography variant="body1">
            <Phone sx={{ marginRight: "5px" }} />
            123-456-7890
          </Typography>
        </Box>

        {/* Navigation Box */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Navigate
          </Typography>

          {/* Generate footer navigation item */}
          {FooterNavItems.map((item) => (
            <Link
              href={item.id}
              color="inherit"
              sx={{
                display: "block",
                marginBottom: "5px",
                textDecoration: "none",
              }}
            >
              {item.title}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Follow us
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link href="#" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Facebook />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Twitter />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Instagram />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <LinkedIn />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", fontWeight: "bold", textAlign: "center" }}
          >
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
