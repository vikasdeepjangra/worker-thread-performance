import path from 'path';
import { Worker } from 'worker_threads';

export async function doFib(num: number){
    return new Promise(async (resolve, reject) => {
        const t0 = performance.now();
        const workerPath = path.join(__dirname, '/workers/fibonacciWorker.js')
        const worker = new Worker(workerPath, { 
            workerData: {
                num
            }
        });
        worker.once('message', (data) => {
            const t1 = performance.now();
            console.log(`Time Taken By Each Promise ${t1-t0}\n`);
            resolve(data);
        });
        worker.once('error', (err) => {
            console.log(err);
            reject(err);
        })
    })
}