import awsServerlessExpress from 'aws-serverless-express';
import app from './src/app';
const server = awsServerlessExpress.createServer(app);

export function handler(event, context) {
  return awsServerlessExpress.proxy(server, event, context);
}
