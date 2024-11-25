import { Box, Button, Container, Typography } from "@mui/material";
import bgImage from "../../assets/bgImage.png";
import AvatarImage from "../../assets/Icons.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  flexDirection: "row", // Desktop uchun yonma-yon
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Telefon uchun yuqoridan pastga
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingLeft: "2rem",
  zIndex: 1,
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center", // Telefon uchun markazlashgan
    padding: "1rem",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  order: 1, // Desktopda rasm ikkinchi
  [theme.breakpoints.down("sm")]: {
    order: 0, // Telefon uchun rasm birinchi
  },
}));

const HeroImage = styled("img")({
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  objectFit: "cover",
  zIndex: 1,
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  fontWeight: 700,
  color: "#31323B",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem", // Telefon uchun kichraytirilgan
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: "#666666",
  marginBottom: "2rem",
  maxWidth: "500px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    fontSize: "1rem",
  },
}));

const AboutUser = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <HeroContainer>
        <ImageWrapper>
          <HeroImage src={AvatarImage} alt="Professional portrait" />
        </ImageWrapper>
        <ContentWrapper>
          <HeroTitle variant="h1">I'm Samandar Abduqodirov</HeroTitle>
          <HeroSubtitle variant="h5">
            University Student Specializing in Accounting
          </HeroSubtitle>
          <Button
            variant="contained"
            endIcon={<PermIdentityIcon />}
            size="large"
            sx={{
              color: "#000",
              fontWeight: 600,
              background: "#F5E0C9",
              fontSize: "1.2rem",
              padding: "1rem 2rem",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            onClick={() => navigate("about-me")}
          >
            Hire Me
          </Button>
        </ContentWrapper>
      </HeroContainer>
    </Container>
  );
};

export default AboutUser;
