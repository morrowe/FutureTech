const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const {Pool} = require('pg')

const app = express()
app.use(cors())
app.use(express.json()) 

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"1234",
    port:"5432"
})

const PORT = "3000" || 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get("/api/neww", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, text, categ, date, author, liike, send FROM neww");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/news", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, categ, liike, send FROM news");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/people", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, work, data, head, text, liike, comm, send FROM people");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/video", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, time, name, text FROM video");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/footr", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, info FROM footr");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/articl", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, head, host, bg, name, text, episod, info, reales FROM articl");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/rolik", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, time, name, info FROM rolik");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/pluses", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, info FROM pluses");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/paper", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, head, info, bg, name, text, date, categ, author FROM paper");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
app.get("/api/trends", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, info FROM trends");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});
