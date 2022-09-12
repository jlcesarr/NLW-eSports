import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ads", (request: Request, response: Response) => {
  response.json([
    {
      id: 1,
      name: "Anúncio 1",
    },
    {
      id: 2,
      name: "Anúncio 2",
    },
    {
      id: 3,
      name: "Anúncio 3",
    },
  ]);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
