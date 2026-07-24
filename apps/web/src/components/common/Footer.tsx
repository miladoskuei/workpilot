import { Box, Container, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 5,
      }}
    >
      <Divider />

      <Container
        maxWidth="xl"
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          color="primary.main"
        >
          WorkPilot
        </Typography>

        <Typography color="text.secondary">
          © 2026 WorkPilot. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}