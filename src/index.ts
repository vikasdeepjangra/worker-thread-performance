import express, { Express, Request, Response } from 'express';
import { doFib } from './fibonacci';

const app: Express = express();
const port = 4200;

app.get('/calculateFibonacciWithThreads', async (req: Request, res: Response)=>{
    try{
        const t0 = performance.now();
        const values = await Promise.all([
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40)
        ]);
        const t1 = performance.now();
        res.json({ 
            status: "success-workerThreads",
            timeTaken: `${t1 - t0}`,
            calculatedValue: values
        });
    } catch(err) {
        res.json({ 
            status: "failed",
            err
        });
    }  
});

app.listen(port, ()=> {
    console.log(`Server Running on Port: ${port}`);
});