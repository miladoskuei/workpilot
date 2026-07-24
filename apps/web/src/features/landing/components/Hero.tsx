import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        py: 14,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h1"
            sx={{
              maxWidth: 900,
            }}
          >
            Manage Projects.
            <br />
            Track Productivity.
            <br />
            Grow Your Team.
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 650,
            }}
          >
            WorkPilot helps companies manage projects,
            employees and productivity analytics from
            one powerful platform.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
            >
              Live Demo
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}