import { Box, Button, Typography, useTheme } from "@mui/material";


export default function LandingPage() {

   const theme = useTheme();

  console.log("Primary:", theme.palette.primary.main);
  console.log("Text Primary:", theme.palette.text.primary);
  return (
    <Box sx={{ p: 5 }}>
      <Typography 
  variant="h1"
  sx={{ color: "text.primary" }}
>
  WorkPilot
</Typography>

      <Typography variant="body1">
        Work Management & Productivity Analytics Platform
      </Typography>

      <Button variant="contained">
        Get Started
      </Button>
    </Box>
  );
}