"use client"
import { Box, Grid2, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const about = {
  name: "Lim Shau Hong",
  title: "Software Engineer",
  description: "I'm a software engineer based in Penang, Malaysia specializing in \
  building web applications and machine learning applications.",
  social: {
    linkedin: "https://linkedin.com/in/shauhong",
    github: "https://github.com/shauhong"
  }
}

export default function Home() {
  return (
    <Box display="block" sx={{ backgroundImage: `url("/graph-paper.svg")`, height: "80vh", p: 2 }}>
      <Typography variant="h5" component="div" sx={{ display: "block" }}>
        About Me
      </Typography>
      <Grid2 container size={12} sx={{ my: 16, display: { xs: "none", sm: "flex" } }} rowSpacing={4} columnSpacing={4}>
        <Grid2 size={{ sm: 6 }}>
          <Typography variant="h1" sx={{ mb: 1, fontWeight: "bold" }}>
            {about?.name}
          </Typography>
          <Typography variant="h5">
            {about?.title}
          </Typography>
        </Grid2>
        <Grid2 size={{ sm: 6 }}>
          <Typography variant="h5" sx={{ px: 4 }}>
            {about?.description}
          </Typography>
        </Grid2>
      </Grid2>
      <Stack sx={{ my: 12, display: { xs: "block", sm: "none" } }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
          {about?.name}
        </Typography>
        <Typography variant="h5" sx={{mb: 4}}>
          {about?.title}
        </Typography>
        <Typography variant="h5">
          {about?.description}
        </Typography>
      </Stack>
      <IconButton href={about.social.linkedin} size="large">
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton href={about.social.github} size="large">
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Box>
  )
}
