import React from "react";
import { Stack, Paper, Typography, Tooltip } from "@mui/material";
import { Grid2 } from "@mui/material"; // Use Grid2 instead of Grid
import { Meteors } from "../components/effects/Meteors"; // Import the Meteors component
import Image from "next/image"; // Import Image for optimization

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
      <h2 className="text-6xl font-bold text-center text-black mb-16 ">
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
          padding: { xs: "0 10px", sm: "0" },
        }}
      >
        {/* Frontend + Backend Skills Box */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "90%", sm: "38%" },
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "16px",
            background: "#FFFFFF",
            minHeight: "350px",
            position: "relative", // Necessary to scope the meteors
            overflow: "hidden", // Keep meteors inside the box
            boxShadow: "0 4px 20px 0 rgba(255, 255, 255, 0.3)", // White box shadow
            borderLeft: "9px solid black", // Top black border
            borderBottom: "4px solid black", // Bottom black border
            shadow: "rgba(0, 0, 0, 0.5) -10px 0px 15px 0px", // Left-side shadow
          }}
        >
          {/* Meteor effect as background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0, // Behind content
              pointerEvents: "none", // Avoid interaction blocking
            }}
          >
            <Meteors number={20} />
          </div>

          {/* Content */}
          <Typography
            variant="h6"
            sx={{ fontSize: "1.8rem", zIndex: 1, fontWeight: "bold" }} // Ensure content is above the meteors
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
                    width={60} // Image optimization
                    height={60} // Image optimization
                    style={{ marginBottom: "8px" }}
                  />
                </Tooltip>
              </Grid2>
            ))}
          </Grid2>
        </Paper>

        {/* Tools & Others Skills Box */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "90%", sm: "38%" },
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "16px",
            background: "#FFFFFF",
            minHeight: "350px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 20px 0 rgba(255, 255, 255, 0.3)", // White box shadow
            borderLeft: "9px solid black",
            borderBottom: "4px solid black", // Bottom black border
            shadow: "rgba(0, 0, 0, 0.5) -10px 0px 15px 0px", // Left-side shadow
          }}
        >
          {/* Meteor effect as background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0, // Behind content
              pointerEvents: "none", // Avoid interaction blocking
            }}
          >
            <Meteors number={20} />
          </div>

          {/* Content */}
          <Typography
            variant="h6"
            sx={{ fontSize: "1.8rem", zIndex: 1, fontWeight: "bold" }} // Ensure content is above the meteors
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
                    width={60} // Image optimization
                    height={60} // Image optimization
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
