import React from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";

const posts = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Ayuda con Cálculo",
    description: "Soy bueno en Cálculo, pero necesito ayuda con Álgebra.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Experto en Programación",
    description: "Puedo ayudarte con Python, pero necesito apoyo en Física.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Diseño Gráfico",
    description: "Soy experto en Illustrator, necesito ayuda con Estadística.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Química",
    description: "Puedo ayudarte con Química Orgánica, pero me cuesta Inglés.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Marketing Digital",
    description: "Sé mucho de SEO, pero necesito apoyo en Programación.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Matemáticas Financieras",
    description: "Experto en Finanzas, pero necesito ayuda con Álgebra.",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    title: "Matemáticas Financieras",
    description: "Experto en Finanzas, pero necesito ayuda con Álgebra.",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    title: "Matemáticas Financieras",
    description: "Experto en Finanzas, pero necesito ayuda con Álgebra.",
  },
];

while (posts.length < 8) {
  posts.push({
    id: `empty-${posts.length}`,
    image: "",
    title: "",
    description: "",
  });
}

const Gallery = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={3} key={post.id}>
          <CardComponent
            image={post.image}
            title={post.title}
            description={post.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
