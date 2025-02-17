import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

env.config();  // Load environment variables from .env file

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;
    console.log(items);
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (error) {
    console.log(error)
  }
  
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  } 
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1;",[id]);
    res.redirect("/");
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
