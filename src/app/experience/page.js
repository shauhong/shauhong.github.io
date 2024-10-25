"use client"
import { Box, Divider, Grid2, Typography } from "@mui/material"

const experience = [
    {
        company: "Intel Corporation",
        title: "Software Engineer",
        duration: "2022 - Present",
        description: "Developed a web system using React, Django, Bootstrap, and the Carbon Design System, \
        replacing Excel spreadsheets for standard cell library specifications, streamlining workflow efficiency. \
        Developed a Python library to automate the parsing and processing of these spreadsheets, optimizing content generation for downstream tools. \
        Conducted thorough code reviews to ensure quality, adherence to best practices, and maintainability.",
        
    },
    {
        company: "ViTrox Corporation",
        title: "Research and Development Trainee",
        duration: "2021 - 2021",
        description: "Building an object detection system using PyTorch to detect defects in printed circuit boards, \
        greatly improved accuracy and efficiency. \
        Also developed a dashboard using Angular, Spring Boot, PostgreSQL, and Bootstrap to review defect detection results, \
        with pagination implementation improving large query performance."
    }
]

const education = [
    {
        university: "Universiti Sains Malaysia",
        degree: "Master's Degree",
        field: "Computer Science",
        duration: "2023 - 2024",
        thesis: "Visual Instruction Tuning for Multimodal Hate Speech Detection and Explanation"
    },
    {
        university: "Universiti Sains Malaysia",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        duration: "2018 - 2022",
    }
]

export default function Experience() {
    return (
        <Box display="block">
        <WorkExperience />
        <Divider sx={{mb:4}}/>
        <Education />
        </Box>
    )
}

function WorkExperience() {
    return (
        <Box sx={{display: "block"}}>
        <Typography variant="h5" component="div" sx={{display: "block"}}>
            Work Experience
        </Typography>
        <Grid2 container sx={{my: 4}} rowSpacing={4} columnSpacing={4}>
            {
                experience && experience.map((item, index) => 
                    <Grid2 container size={12} key={index}>
                    <Grid2 size={{xs: 3, lg:4}}>
                        {item?.duration}
                    </Grid2>
                    <Grid2 size={{xs: 9, lg:8}}>   
                        <Typography sx={{fontWeight: "bold", mb: 1}}>{item?.company}</Typography>
                        <Typography sx={{mb: 1}}>{item?.title}</Typography>
                        <Typography>{item?.description}</Typography>
                    </Grid2>
                    </Grid2>
                )
            }
        </Grid2>
        </Box>
    )
}

function Education() {
    return (
        <Box sx={{display: "block"}}>
            <Typography variant="h5" component="div" sx={{display: "block"}}>
                Education
            </Typography>
        <Grid2 container sx={{my: 4}} rowSpacing={4} columnSpacing={4}>
            {
                education && education.map((item, index) => 
                    <Grid2 container size={12} key={index}>
                    <Grid2 size={{xs: 3, lg: 4}}>
                        {item?.duration}
                    </Grid2>
                    <Grid2 size={{xs: 9, lg: 8}}>   
                        <Typography sx={{fontWeight: "bold", mb: 1}}>{item?.university}</Typography>
                        <Typography sx={{mb: 1}}>{item?.degree}</Typography>
                        <Typography sx={{mb: 1}}>{item?.field}</Typography>
                        <Typography>{item?.thesis}</Typography>
                    </Grid2>
                    </Grid2>
                )
            }
        </Grid2>
        </Box>
    )
}