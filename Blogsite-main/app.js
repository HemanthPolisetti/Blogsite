import express, { urlencoded } from "express";
import router from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
import connectdb from "./config/db.js";

const app = express();
app.use(express.json())
connectdb();
app.use('/api/user',router);
app.use('/api/blog',blogRouter);
app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running on port");
})