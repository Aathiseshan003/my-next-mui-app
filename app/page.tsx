import { Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Next.js + MUI
        </Typography>
        <Link href="/login" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </Link>
        <Link href="/signup" passHref>
          <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
