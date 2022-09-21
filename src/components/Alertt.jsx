import { Alert, Box, Grid, Typography } from "@mui/material";


export const Alertt = () => {
  return (
    
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt:5,
        
      }}
    >
      <Typography variant="body" color="primary.main">You should input a song and an artist</Typography>
    </Box>
    
  );
};
