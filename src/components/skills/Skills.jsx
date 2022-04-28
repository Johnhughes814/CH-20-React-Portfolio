import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./skills.css";
import { projects } from "../../data";

const Skills = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <div className="pl-list">
        {projects.map((item) => (
          <Paper elevation={3} sx={{
            padding: 1
          }}></Paper>))}
      </div>
    </Box>
  );
};

export default Skills;