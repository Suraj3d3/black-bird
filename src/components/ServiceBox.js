// import React from "react";
// import {
//   Grid,
//   Box,
//   Typography,
//   createTheme,
//   useMediaQuery,
// } from "@mui/material";

// function ServicesBox({ title, description, IconComponent }) {
//   return (
//     <Grid item>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         textAlign="center"
//         width={300}
//         minHeight={300}
//         borderRadius={4}
//         position="relative"
//         bgcolor="background.paper"
//         color="text.primary"
//         sx={{
//           transition: "background-color 0.3s, color 0.3s",
//           "&:hover": {
//             bgcolor: "#2C3335",
//             color: "#f7f1e3",
//             cursor: "pointer",
//           },
//         }}
//       >
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           position="absolute"
//           top={-40}
//           width={80}
//           height={80}
//           borderRadius="50%"
//           bgcolor="#2C3335"
//           color="secondary.contrastText"
//         >
//           {IconComponent ? <IconComponent /> : ""}
//         </Box>
//         <Typography
//           variant="h6"
//           sx={{
//             paddingTop: 6,
//           }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="body2"
//           textAlign="left"
//           sx={{
//             padding: "10px",
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: 400,
//             fontStyle: "normal",
//             fontSize: "15px",
//           }}
//         >
//           {description}
//         </Typography>
//       </Box>
//     </Grid>
//   );
// }

// export default ServicesBox;

import React from "react";
import {
  Grid,
  Box,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ServicesBox({
  title,
  description,
  detailedDescription,
  IconComponent,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <Typography
          variant="h6"
          sx={{
            paddingTop: 6,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          textAlign="left"
          sx={{
            padding: "10px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "15px",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ArrowDownwardSharpIcon sx={{ ":hover": { cursor: "pointer" } }} />
          </ExpandMore>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ textAlign: "left" }}>
            {detailedDescription}
          </CardContent>
        </Collapse>
      </Box>
    </Grid>
  );
}

export default ServicesBox;
