import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Box>
      <Navbar />
      <Typography variant="h3" align="center" marginTop={3}>NavBar</Typography>
    </Box>
  );
}

export default App;
