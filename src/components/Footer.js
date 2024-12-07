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
import { footerInfo } from "../utils/info";

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
          {/* <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Black Bird
          </Typography> */}
          <img
            src="./assets/logo.png"
            alt="Black Bird "
            style={{
              height: 45,
              width: 160,
              backgroundColor: "#fff",
              borderRadius: "2px",
            }}
          />
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            {/* <LocationOn sx={{ marginRight: "5px" }} /> */}
            {footerInfo.FOOTER_ADDRESS}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <Email sx={{ marginRight: "5px" }} />
            {footerInfo.FOOTER_EMAIL}
          </Typography>
          <Typography variant="body1">
            <Phone sx={{ marginRight: "5px" }} />
            {footerInfo.FOOTER_PHONE}
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
          {/* <Link href="/credits.html">Credits</Link> */}
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
              <Link href={footerInfo.FOOTER_FB} color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Facebook />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href={footerInfo.FOOTER_TWITTER} color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Twitter />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href={footerInfo.FOOTER_INSTA} color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <Instagram />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href={footerInfo.FOOTER_LINKEDIN} color="inherit">
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
