import { createMiddleware } from 'redux-api-middleware';
import messageMiddleware from './messageMiddleware';
import chatMiddleware from './chatMiddleware';

export default [
   createMiddleware(),
   messageMiddleware,
   chatMiddleware,
];