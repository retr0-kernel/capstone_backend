import express, {Express, Request, Response} from "express";
import rootRouter from "./routes";

const app:Express = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/api', rootRouter)

app.get('/', (req: Request, res: Response)=>{
    res.send("Working 👌")
})


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})
