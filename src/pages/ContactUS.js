import React from "react";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { contactUsInfo } from "../utils/info";

const theme = createTheme();

const ContactUS = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        id="contactus"
        container
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* First Row */}
        <Grid item container style={{ flex: 1 }}>
          {/* First Column */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: "#2C3335",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: isSmallScreen ? "32px" : "44px",
              fontWeight: "bold",
              zIndex: 1,
              paddingLeft: isSmallScreen ? "0" : "50px",
              paddingRight: isSmallScreen ? "0" : "100px",
            }}
          >
            <Typography
              variant="h3"
              style={{
                marginBottom: "20px",
                color: "#f7f1e3",
                fontFamily: "Bebas Neue, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: isSmallScreen ? "40px" : "60px",
              }}
            >
              GET IN TOUCH
            </Typography>

            <Typography variant="body1">
              Reach out to us for any queries or assistance.
            </Typography>
            {/* Call Us */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                marginTop: isSmallScreen ? "20px" : "40px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <CallIcon style={{ marginRight: "10px" }} />
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Call Us
                </Typography>
              </Box>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                {contactUsInfo.CONTACT_US_NAME} <br />
                {contactUsInfo.CONTACT_US_PHONE}
              </Typography>
            </Box>
            {/* Email Us */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: isSmallScreen ? "20px" : "40px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <EmailIcon style={{ marginRight: "10px" }} />
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Email Us
                </Typography>
              </Box>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                info@example.com
              </Typography>
            </Box>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: isSmallScreen ? "-50px" : "-100px",
                width: isSmallScreen ? "50px" : "100px",
                height: "100%",
                backgroundColor: "#2C3335",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "100%",
                zIndex: -1,
                display: isSmallScreen ? "none" : "block",
              }}
            ></div>
          </Grid>
          {/* Second Column */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: "#f44336",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="./assets/contact-us.jpg"
              alt="placeholder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ContactUS;
