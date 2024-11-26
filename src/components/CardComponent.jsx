import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardComponent = ({ image, title, description }) => {
  if (!title) return <div style={{ height: "200px", width: "100%" }}></div>;

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={image || "https://via.placeholder.com/150"}
        alt={title || "Publicación"}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Ver Más
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
