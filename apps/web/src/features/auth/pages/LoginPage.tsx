import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            p: 5,
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Stack spacing={4}>
            <Stack spacing={1}>
              <Typography
                variant="h3"
                fontWeight={700}
              >
                Welcome Back
              </Typography>

              <Typography color="text.secondary">
                Sign in to continue to WorkPilot.
              </Typography>
            </Stack>

            <LoginForm />

            <Typography
              textAlign="center"
              color="text.secondary"
            >
              Don't have an account?{" "}
              <Typography
                component={RouterLink}
                to="/register"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                Create one
              </Typography>
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}