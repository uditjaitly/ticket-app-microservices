import express from 'express';
import mongoose from 'mongoose';
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

app.get('/',(req,res)=>{
  return res.send(
    "Testing"
  )
})

app.listen(3000,()=>{
  console.log("Listening on port 3000!!")
})
