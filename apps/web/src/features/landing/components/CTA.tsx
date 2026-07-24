import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function CTA() {
  return (
    <Box py={14}>
      <Container maxWidth="md">
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h2">
            Ready to boost your team's productivity?
          </Typography>

          <Button
            variant="contained"
            size="large"
          >
            Start for Free
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}