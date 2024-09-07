import express from 'express';
import path from 'path';
import fs from 'fs';
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

app.get('/attendance', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'attendance.html'));
});

// Sample API route
app.post('/api/record/attendance', async (req, res) => {
    const records = await addRecord(req.body);
    res.json({ message: records });
});


// Route to handle data submission and save to CSV
app.post('/api/record/save-data', (req, res) => {
    const { name, status, formattedDate } = req.body;
  
    if (!name || !status) {
      return res.status(400).json({ message: 'Invalid input data' });
    }
  
    const csvData = `${name},${status},${formattedDate}\n`;
  
    const filePath = path.join(__dirname, 'data.csv');
    
    // Append data to CSV file
    fs.appendFile(filePath, csvData, (err) => {
      if (err) {
        console.error('Error writing to file', err);
        return res.status(500).json({ message: 'Failed to save data' });
      }
      res.json({ message: 'Data saved to CSV!' });
    });
  });



// Route to load and return CSV data
app.get('/api/record/load-data', (req, res) => {
  const filePath = path.join(__dirname, 'data.csv');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file', err);
      return res.status(500).json({ message: 'Failed to load data' });
    }

    // Send the CSV data back to the client
    res.json({ csvData: data });
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
