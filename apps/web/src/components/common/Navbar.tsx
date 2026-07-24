import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

const links = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Analytics",
    href: "#analytics",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export default function Navbar() {
  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,.75)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 80 }}>
          {/* Logo */}

          <Typography
            variant="h5"
            fontWeight={800}
            sx={{
              color: "primary.main",
              mr: 8,
            }}
          >
            WorkPilot
          </Typography>

          {/* Links */}

          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexGrow: 1,
            }}
          >
            {links.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.href}
                color="inherit"
                sx={{
                  color: "text.secondary",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: 15,

                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "transparent",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Right Side */}

          {!isAuthenticated ? (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button
                component={NavLink}
                to="/login"
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                Login
              </Button>

              <Button
                component={NavLink}
                to="/register"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  px: 3,
                  textTransform: "none",
                  boxShadow: "none",

                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={NavLink}
                to="/app/dashboard"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Dashboard
              </Button>

              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "primary.main",
                }}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar>

              <Typography
                fontWeight={600}
                color="text.primary"
              >
                {user?.name}
              </Typography>

              <Button
                color="error"
                onClick={handleLogout}
                sx={{
                  textTransform: "none",
                }}
              >
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}