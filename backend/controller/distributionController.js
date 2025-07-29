import csv from 'csvtojson';
import * as XLSX from 'xlsx';
import { agentModel } from '../config/config.js';
import { Task } from '../config/config.js';


export const uploadAndDistributeTasks = async (req, res) => {
  try {
    const file = req.file;

    if (!file) return res.status(400).json({ message: "No file uploaded." });

    let jsonData = [];

    // Handle .csv
    if (file.originalname.endsWith('.csv')) {
      jsonData = await csv().fromString(file.buffer.toString());
    }
    // Handle .xlsx or .xls
    else {
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      jsonData = sheetData;
    }

    // Validate data structure
    const isValid = jsonData.every(item =>
      item.FirstName && item.Phone && item.Notes
    );

    if (!isValid) {
      return res.status(400).json({ message: "Invalid CSV structure. Required: FirstName, Phone, Notes." });
    }

    // Get 5 agents
    const agents = await agentModel.find().limit(5);
    if (agents.length < 5) {
      return res.status(400).json({ message: "At least 5 agents are required for task distribution." });
    }

    // Distribute tasks equally
    const tasks = [];
    for (let i = 0; i < jsonData.length; i++) {
      const agentIndex = i % 5; // Cycles through 0-4
      tasks.push({
        firstName: jsonData[i].FirstName,
        phone: jsonData[i].Phone,
        notes: jsonData[i].Notes,
        assignedTo: agents[agentIndex]._id,
      });
    }

    // Save tasks to DB
    await Task.insertMany(tasks);

    res.status(200).json({
      success: true,
      message: "Tasks uploaded and distributed successfully.",
    });

  } catch (error) {
    console.error("CSV Upload Error:", error);
    res.status(500).json({ message: "Server error while uploading CSV." });
  }
};


// In controller
export const getTasksByAgent = async (req, res) => {
    const tasks = await Task.find().populate('assignedTo', 'name email');
    res.json(tasks);
  };
  