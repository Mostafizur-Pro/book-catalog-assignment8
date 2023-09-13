import express, { Application } from 'express'
import cors from 'cors';
import { CategoryRoutes } from './modules/category/category.route';


const app: Application = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// app.use("/api/v1/user", UserRoutes);
// app.use("/api/v1/category", CategoryRoutes);
// app.use("/api/v1/post", PostRoutes)
app.use("/api/v1/categories", CategoryRoutes)


export default app;