import axios from "axios";
import express from "express";

const app = express();
const PORT = 3000;
const url = "https://jsonplaceholder.typicode.com/posts"

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Connected at PORT: ${PORT}`);
})