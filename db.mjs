import Airtable from 'airtable';
import dotenv from 'dotenv';

dotenv.config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
const tableName = process.env.TABLE_NAME;

export async function addRecord(data) {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.TABLE_NAME}`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
        Name: data.name,
        Attending: data.attending
        }
      })
    });
    
    const res = await response.json();
    return res
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getRecords(options = {}) {
 try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.TABLE_NAME}`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json'
          }
        });
        
        const res = await response.json();
        return res
      } catch (error) {
        console.error('Error:', error);
      }
}