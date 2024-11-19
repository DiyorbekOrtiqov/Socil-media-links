import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Typography variant="h6" fontWeight={600} paddingY={5}>
        © 2024 Samandar. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
