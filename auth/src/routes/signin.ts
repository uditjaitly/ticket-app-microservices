import express from 'express';
import {body,validationResult} from 'express-validator'
import InvalidCredentials from '../errors/InvalidCredentials'
const router=express.Router();

router.post('/api/users/signin',body('email').isEmail().withMessage("invalid email"), body('password').isAlphanumeric().isLength({min:4}).withMessage("invalid password"),(req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    throw new InvalidCredentials(errors.array());
  }
  return res.send("Success")
})

export {router as signinRouter};
