import express, { Express, Request, Response } from 'express';
import { doFib } from './fibonacci';

const app: Express = express();
const port = 4200;

app.get('/createFlameGraph', async (req: Request, res: Response)=>{
    try{
        const n = 40;
        const fib = doFib(n);
        console.log(`Sum of Series till ${n} is: ${fib}\n`);
        res.send({
            status: "success",
            value: fib
        })
    } catch(err){
        res.send({
            status: "error"
        });
    }
});

app.listen(port, ()=> {
    console.log(`Server Running on Port: ${port}`);
});