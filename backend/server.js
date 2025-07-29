import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import appRouter from './Approuter/appRouter.js';
import connectionDB from './config/database.js';

const app = express();


// Middlewares
app.use(express.json());
app.use(cors());

connectionDB()

app.use('/api/admin' , appRouter)

app.get('/', (req,res)=> {
    res.send("your on board")
})



  

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
