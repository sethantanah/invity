import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {getRecords, addRecord} from './db.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



// Sample API route
app.post('/api/record/attendance', async (req, res) => {
  const records = await addRecord(req.body)
  res.json({ message: records });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});