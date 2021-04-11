import express from 'express';
import {body, validationResult} from 'express-validator';
import { currentuserRouter } from './routes/currentuser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import errorHandler from './error-handler/ErrorHandler'
const app = express();
app.use(express.json())

app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);



app.listen(3000,()=>{
  console.log("Listening on port 300!!")
})
