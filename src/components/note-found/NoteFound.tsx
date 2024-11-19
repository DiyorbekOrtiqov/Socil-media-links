import NotFound from "../../assets/404.png";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NoteFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <img
        src={NotFound}
        alt="not found"
        style={{
          filter: "hue-rotate(18deg) brightness(1) ",
        }}
      />

      <Typography variant="h5" fontWeight={600}>
        Not Fount page
      </Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{
          backgroundColor: "#F5E0C9",
          color: "black",
          fontWeight: 600,
          marginTop: "1rem",
          fontSize: "1rem",
          textTransform: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#F5E0C9",
            transform: "scale(1.1)",
          },
          "& .MuiButton-startIcon": {
            animation: "slideIn 0.5s ease",
          },
          "@keyframes slideIn": {
            "0%": { transform: "translateX(-10px)", opacity: 0 },
            "100%": { transform: "translateX(0)", opacity: 1 },
          },
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NoteFound;
