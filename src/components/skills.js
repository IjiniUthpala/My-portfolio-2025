'use client';

import React from "react";
import { Stack, Paper, Typography, Tooltip } from "@mui/material";
import { Grid2 } from "@mui/material";
import Image from "next/image";

const frontendAndBackendSkills = [
  { name: "HTML5", image: "/tech stack/css.svg" },
  { name: "JavaScript", image: "/tech stack/javascript.svg" },
  { name: "React", image: "/tech stack/react.svg" },
  { name: "TypeScript", image: "/tech stack/typescript.svg" },
  { name: "Material UI", image: "/tech stack/material-ui.svg" },
  { name: "Next.js", image: "/tech stack/next.svg" },
  { name: "Node.js", image: "/tech stack/nodejs.svg" },
  { name: "MySQL", image: "/tech stack/mysql.svg" },
  { name: "MongoDB", image: "/tech stack/mongodb.svg" },
  { name: "Redux", image: "/tech stack/redux.svg" },
  { name: "Python", image: "/tech stack/python.svg" },
  { name: "C#", image: "/tech stack/csharp.svg" },
];

const toolsAndOthersSkills = [
  { name: "Git", image: "/tech stack/git.svg" },
  { name: "GitHub", image: "/tech stack/github.svg" },
  { name: "Docker", image: "/tech stack/docker.svg" },
  { name: "Figma", image: "/tech stack/figma.svg" },
  { name: "Azure", image: "/tech stack/azure.svg" },
  { name: "Linux", image: "/tech stack/linux.svg" },
  { name: "VS Code", image: "/tech stack/vscode.svg" },
  { name: "Tailwind CSS", image: "/tech stack/tailwind-css.svg" },
  { name: "AWS", image: "/tech stack/aws.svg" },
  { name: "Three.js", image: "/tech stack/three.svg" },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-center text-black mb-16">
        Skills
      </h2>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          gap: { xs: "16px", sm: "32px" },
          padding: { xs: "0 24px", sm: "0 40px" },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "38%" },
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "16px",
            background: "#FFFFFF",
            minHeight: "350px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 20px 0 rgba(255, 255, 255, 0.3)",
            borderLeft: "9px solid black",
            borderBottom: "4px solid black",
            margin: { xs: "16px 0", sm: "0" },
          }}
        >
          {/* 
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <Meteors number={20} />
          </div> 
          */}
          <Typography
            variant="h6"
            sx={{ fontSize: "1.8rem", zIndex: 1, fontWeight: "bold" }}
            className="text-black text-center mb-6"
          >
            Frontend & Backend Skills
          </Typography>
          <Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: "16px", zIndex: 1 }}>
            {frontendAndBackendSkills.map((skill, index) => (
              <Grid2 xs={6} sm={4} md={3} key={index} className="flex flex-col items-center">
                <Tooltip title={skill.name} arrow>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={60}
                    height={60}
                    style={{ marginBottom: "8px" }}
                  />
                </Tooltip>
              </Grid2>
            ))}
          </Grid2>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "38%" },
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "16px",
            background: "#FFFFFF",
            minHeight: "350px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 20px 0 rgba(255, 255, 255, 0.3)",
            borderLeft: "9px solid black",
            borderBottom: "4px solid black",
            margin: { xs: "16px 0", sm: "0" },
          }}
        >
          {/* 
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <Meteors number={20} />
          </div> 
          */}
          <Typography
            variant="h6"
            sx={{ fontSize: "1.8rem", zIndex: 1, fontWeight: "bold" }}
            className="text-black text-center mb-6"
          >
            Tools & Others
          </Typography>
          <Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: "16px", zIndex: 1 }}>
            {toolsAndOthersSkills.map((skill, index) => (
              <Grid2 xs={6} sm={4} md={3} key={index} className="flex flex-col items-center">
                <Tooltip title={skill.name} arrow>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={60}
                    height={60}
                    style={{ marginBottom: "8px" }}
                  />
                </Tooltip>
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      </Stack>
    </section>
  );
}
