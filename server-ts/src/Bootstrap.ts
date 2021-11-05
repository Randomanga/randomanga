import 'dotenv/config';

import App from 'Web/App';

import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = new App();
  console.log(`Worker ${process.pid} started`);
}

/*
  Original Repository: https://github.com/WebDevSimplified/Your-First-Node-REST-API
  This project turns it to a more advanced architecture.
*/
