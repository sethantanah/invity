import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { getRecords, addRecord } from './db.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/share', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'share.html'));
});

// Sample API route
app.post('/api/record/attendance', async (req, res) => {
    const records = await addRecord(req.body);
    res.json({ message: records });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
