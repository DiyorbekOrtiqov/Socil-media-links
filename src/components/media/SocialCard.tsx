/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import MediaData from "./data";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import AtSignIcon from "@mui/icons-material/AlternateEmail";

const IconWrapper = styled(Box)({
  fontSize: "2.5rem",
  marginBottom: "1rem",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  justifyContent: "center",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(255, 184, 0, 0.1)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
});

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  padding: "1.5rem",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05)",
    animation: `${float} 2s ease-in-out infinite`,
    "& .icon": {
      transform: "scale(1.2)",
      color: theme.palette.primary.main,
    },
    "& .overlay": {
      opacity: 1,
    },
  },
}));

interface MediaIconProps {
  profile: {
    name: string;
  };
}

const MediaIcon = ({ profile }: MediaIconProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {profile.name === "Telegram" ? (
        <TelegramIcon sx={{ fontSize: "3rem" }} />
      ) : profile.name === "Instagram" ? (
        <InstagramIcon sx={{ fontSize: "3rem" }} />
      ) : profile.name === "Facebook" ? (
        <FacebookIcon sx={{ fontSize: "3rem" }} />
      ) : profile.name === "Three" ? (
        <AtSignIcon sx={{ fontSize: "3rem" }} />
      ) : (
        <QuestionMarkSharpIcon sx={{ fontSize: "3rem" }} />
      )}
    </Box>
  );
};

const SocialCard = () => {
  const handleClick = (
    url: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.open(url, "_blank");
    } else {
      console.error("Invalid URL:", url);
    }
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{ mb: 4, textAlign: "center" }}
          color="#31323B"
          fontWeight={600}
        >
          Connect With Me
        </Typography>
        <Grid container spacing={4}>
          {MediaData.map((profile) => (
            <Grid item xs={12} sm={6} md={3} key={profile.name}>
              <StyledCard onClick={(e) => handleClick(profile.link, e)}>
                <Overlay className="overlay" />
                <CardContent sx={{ textAlign: "center" }}>
                  <IconWrapper className="icon">
                    <MediaIcon profile={profile} />
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom>
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.nickName}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialCard;
