import {ValidationError} from 'express-validator'
import { CustomError } from './customer-error';




class InvalidCredentials extends CustomError{
  statusCode=400;
  reason="Invalid Email or Password!"
  constructor(public errors:ValidationError[]){
    super();
    Object.setPrototypeOf(this,InvalidCredentials.prototype);
   
  }

  serializeErrors(){
    return this.errors.map(err=>{
      return {message:this.reason,field:err.param}
    })
    
    
  }
  


};

export default InvalidCredentials;






