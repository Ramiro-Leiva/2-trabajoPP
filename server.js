const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());

app.get('/api/productos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.listen(3001, () => console.log('API corriendo en http://localhost:3001'));