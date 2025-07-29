import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("Admin", adminSchema);

export default userModel

// user scheema


const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const agentModel = mongoose.model('Agent', agentSchema);


// task shceema 

const taskSchema = new mongoose.Schema({
  firstName: String,
  phone: String,
  notes: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
});

export const Task = mongoose.model('Task', taskSchema);
