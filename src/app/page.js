"use client"
import { Box, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "@emotion/react";

const about = {
  name: "Lim Shau Hong",
  title: "Software Engineer",
  description: "I'm a software engineer based in Penang, Malaysia passionate about full stack web development and machine learning.", 
  social: {
    linkedin: "https://linkedin.com/in/shauhong",
    github: "https://github.com/shauhong"
  }
}

export default function Home() {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box display="block" sx={{ backgroundImage: `url("/graph-paper.svg")`, p: 2 }}>
      <Typography variant="h5" component="div" sx={{ display: "block" }}>
        About Me
      </Typography>
      <Stack sx={{ my: {xs: 2, sm: 8, md: 14 } }}>
      <Typography variant="h5" sx={{ mb: 2 }} fontWeight="light" color="word">
          Hi there, I&apos;m
        </Typography>
        <Typography variant="h1" sx={{ mb: 2 }} fontWeight="bold">
          {about?.name}
        </Typography>
        <Typography variant="h5" sx={{mb: 6}} fontWeight="light" color="word">
          {about?.title}
        </Typography>
        <Typography variant="h4" fontWeight="light" color="word">
          {about?.description}
        </Typography>
      </Stack>
      <IconButton href={about.social.linkedin} size="large" disableRipple sx={{transition: "transform 0.1s ease-in-out", "&:hover": {color: theme.palette.word, transform: "scale(1.2)"}}}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton href={about.social.github} size="large" disableRipple sx={{transition: "transform 0.1s ease-in-out", "&:hover": {color: theme.palette.word, transform: "scale(1.2)"}}}>
        <GitHubIcon fontSize="large"/>
      </IconButton>
    </Box>
  )
}
