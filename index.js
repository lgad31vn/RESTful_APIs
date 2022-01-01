// const express = require("express");
import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port: ${PORT}`)
);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
