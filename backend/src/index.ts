import app from "./app";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3001`);
});