import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'
import 'dotenv/config' 
import userRouter from './routes/userRoutes.js';
import quizRouter from './routes/quizRoutes.js';
import resultrouter from './routes/resultRoutes.js';

//App Config
const app=express()
const port=process.env.PORT || 4000
connectDB()
//middleware
app.use(express.json())
app.use(cors())

//Api endpoints
app.use('/api/user',userRouter)
app.use("/api/quizzes",quizRouter)
app.use("/api/result",resultrouter)
app.get('/',(req,res) => { 
  res.send("API WORKING")
 })

app.listen(port,()=>console.log("server started on Port :"+port))