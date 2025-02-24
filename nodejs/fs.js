// read file
import { open } from "node:fs/promises";
import fs from 'node:fs';

const dataFilePath = '../TASKS/mini-buchet/db/users.json';

// const file = await open("../TASKS/mini-buchet/db/users.json");

// for await (const line of file.readLines()) {
//   console.log(line);
// }

async function readData() {
    try {
      const data = await fs.readFile(dataFilePath, 'utf-8');
      return JSON.parse(data); // Now directly parse the array from data.json
    } catch (error) {
      console.error('Error reading data:', error);
      return []; // Return empty array if there's an error or file not found
    }
  }

readData();