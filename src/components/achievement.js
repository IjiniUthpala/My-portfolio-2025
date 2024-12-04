import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import Image from "next/image"; // Import Image for optimization

const achievements = [
  { name: "Achievement 1", image: "/path/to/achievement1.jpg" },
  { name: "Achievement 2", image: "/path/to/achievement2.jpg" },
  { name: "Achievement 3", image: "/path/to/achievement3.jpg" },
];

export default function Achievement() {
  return (
    <section>
      <Typography variant="h4" align="center" gutterBottom>
        Achievements
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className="achievement-card">
              <Image
                src={achievement.image}
                alt={achievement.name}
                width={200} // Adjust according to the image size
                height={200} // Adjust according to the image size
                className="achievement-image"
              />
              <Typography variant="h6" align="center">
                {achievement.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
