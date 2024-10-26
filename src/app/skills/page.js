"use client"
import React from 'react';
import {
    Box,
    Button,
    Divider,
    Grid2,
    Typography
} from '@mui/material';

const skills = {
    "Programming Language": [
        {
            name: "Python",
        },
        {
            name: "JavaScript",
        },
        {
            name: "TypeScript",
        },
        {
            name: "Java",
        },
        {
            name: "C++",
        },
    ],
    "Web Development": [
        {
            name: "NextJS",
        },
        {
            name: "React",
        },
        {
            name: "Django",
        },
        {
            name: "Angular",
        },
        {
            name: "Flask",
        },
        {
            name: "Spring Boot",
        },
        {
            name: "Bootstrap",
        },
        {
            name: "Tailwind CSS",
        },

    ],

    "Machine Learning": [
        {
            name: "PyTorch",
        },
        {
            name: "TensorFlow",
        },
        {
            name: "scikit-learn",
        },
    ],
    "Technology": [
        {
            name: "Git",
        },
        {
            name: "Docker",
        },
        {
            name: "Kubernetes",
        },
        {
            name: "PostgreSQL",
        },
        {
            name: "MongoDB",
        },
    ],

}
export default function Skills() {
    return <Box display="block">
        <Typography variant="h5" component="div" sx={{display: "block", mb: 4}}>
            Skills
        </Typography>
    {
        skills && Object.keys(skills).map((item, index) => 
            <React.Fragment key={index}>
                <SkillMatrix key={index} title={item} skills={skills[item]}/>
                { index !== Object.keys(skills).length - 1 && <Divider sx={{mb: 4}}/>}
            </React.Fragment>   
        )
    }
    </Box>;
}

function SkillMatrix({title, skills}) {
    return (
        <Box sx={{ display: "block" }}>
            <Typography variant="h5" component="div" sx={{ display: "block" }} fontWeight="light">
                {title}
            </Typography>
            <Grid2 container sx={{ my: 4 }} rowSpacing={2} columnSpacing={2}>
                {
                    skills && skills.map((item, index) =>
                        <Grid2 key={index}>
                            <Button variant="contained" color="secondary" disableRipple sx={{'&:hover': {cursor: "default"}, borderRadius: 2}}>{item.name}</Button>
                        </Grid2>
                    )
                }
            </Grid2>
        </Box>
    );
}
