import express from 'express';
import { loginAdmin } from '../controller/authController.js';
import { addAgent, getAgents} from '../controller/userControle.js';
import { upload } from '../config/multer.js';
import { uploadAndDistributeTasks ,getTasksByAgent} from '../controller/distributionController.js';

const appRouter = express.Router()


appRouter.post('/login', loginAdmin);
appRouter.post('/add-agent' , addAgent)
appRouter.get('/all-agent' , getAgents)
appRouter.post('/upload-file', upload.single('file'),uploadAndDistributeTasks)
appRouter.get('/all',getTasksByAgent)


export default appRouter