import React from "react";
import {
  Grid,
  Box,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

function ServicesBox({ title, description, IconComponent }) {
  return (
    <Grid item>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width={300}
        minHeight={300}
        borderRadius={4}
        position="relative"
        bgcolor="background.paper"
        color="text.primary"
        sx={{
          transition: "background-color 0.3s, color 0.3s",
          "&:hover": {
            bgcolor: "#2C3335",
            color: "#f7f1e3",
            cursor: "pointer",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top={-40}
          width={80}
          height={80}
          borderRadius="50%"
          bgcolor="#2C3335"
          color="secondary.contrastText"
        >
          {IconComponent ? <IconComponent /> : ""}
        </Box>
        <Typography variant="h6" sx={{ paddingTop: 6 }}>
          {title}
        </Typography>
        <Typography variant="body2" textAlign="left">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ServicesBox;
